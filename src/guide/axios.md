---
aside: false
---

# Axios 定义使用

在 Antd-Templater 开发中，我们选择 Axios 作为与后端接口通信的 http 请求库。同时为了统一接口请求/响应的处理，我们提供如下:

- 请求拦截器
- 响应拦截器
- 实例定义器
- 接口定义规范

## 请求拦截器

::: details 处理 Token 令牌 {open}

```typescript:line-numbers
import { AxiosInstance } from "axios";
import useUserStore from "@/store/user";

const createAxiosInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.request.use(config => {
    const user = useUserStore();
    const headers = config.headers;

    // 如果 headers.token 为空，且 user.token 不为空
    if (user.token && !headers.token && headers.token !== null) {
      headers.token = `Bearer ${user.token}`;
    }

    // 启用 mock service woker (Using in public/msw.js)
    if (headers["x-msw-requester"] === undefined) {
      headers["x-msw-requester"] = "Axios";
    }

    // 如果 headers.token 为空
    if (headers.token === null) {
      delete headers.token;
    }

    return config;
  });

  return axios;
};
```

:::

## 响应拦截器

::: details 响应数据处理 --> 异常消息处理 {open}

::: code-group

```typescript:line-numbers [响应数据处理]
import { AxiosInstance } from "axios";

const createAxiosInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.response.use(response => {
    const config = response.config as any;
    const status = response.status as number;
    const messager = config.messager as boolean;

    // Http Status 异常
    if (status < 200 || status > 300) {
      return Promise.reject(response);
    }

    // 响应体: 文件流、流媒体、二进制流
    if (
      config.responseType === "blob" ||
      config.responseType === "stream" ||
      config.responseType === "arraybuffer"
    ) {
      return response;
    }

    // 业务状态码 显示没有权限
    if (!messager && ["403", "401", 403, 401].includes(response.data?.code)) {
      return Promise.reject(response);
    }

    // 开启 Error消息 全局处理 (messager is true， 业务成功状态码 -> '0000')
    if (messager && response.data?.code !== "0000") {
      return Promise.reject(response);
    }

    return response.data;
  });

  return axios;
};
```

```typescript:line-numbers [异常消息处理]
import { AxiosInstance } from "axios";
import useUserStore from "@/store/user";
import Notification from "ant-design-vue/es/notification";

const createAxiosInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.response.use(
    response => response,
    error => {
      let status = 500 as any;
      let message = "" as any;
      let messager = true as boolean;
      const token = useUserStore().token;
      const logout = useUserStore().logout;
      const promise = Promise.reject(error);

      try {
        status = error.status || status;
        status = error.data?.code || status;
        message = error.data?.message || null;
        messager = error.config?.messager !== false;
      } catch (e) {}

      // 网络超时
      if (error.toString().indexOf("timeout") > -1) {
        Notification.error({
          duration: 1.5,
          message: "系统消息",
          description: "请求超时"
        });
        return promise;
      }

      // 无业务权限
      if (status === 403 || status === "403") {
        Notification.error({
          duration: 1.5,
          message: "系统消息",
          description: message || "暂无权限"
        });

        return promise;
      }

      // Token 已过期 / 无业务权限
      if (status === 401 || status === "401") {
        Notification.error({
          duration: 1.5,
          message: "系统消息",
          description: message || (token ? "token已过期" : "暂无权限")
        });

        // 登录状态, 且Token过期, 则退出
        if (token) {
          logout().then(() => {
            setTimeout(() => window.location.reload(), 800);
          });
        }

        return promise;
      }

      // 开启 Error消息 全局处理
      if (messager === true) {
        Notification.error({
          duration: 1.5,
          message: "系统消息",
          description: message ?? "系统异常"
        });
      }

      return promise;
    }
  );

  return axios;
};
```

:::

## 实例定义器

::: details 创建 Axios 实例 -> 接口传参类型、响应数据类型 {open}

::: code-group

```typescript:line-numbers [实例定义器]
import { RawAxiosRequestConfig } from "axios";
import { CreateAxiosDefaults } from "axios";
import { AxiosInstance } from "axios";
import Axios from "axios";

/**
 * 定义 Axios ResponseResult 类型
 */
type AxiosResponseResult<T = any> = {
  code: string | number | null | undefined;
  message: string | null | undefined;
  result: T;
};

type AxiosRecord = Record<string, any>;
type AxiosDefaultConfig<T = any> = CreateAxiosDefaults<T> & AxiosRecord; // 创建实例时选项
type AxiosRequestConfig<T = any> = RawAxiosRequestConfig<T> & AxiosRecord; // 接口请求时选项

// 响应数据 - 类型断言
type AxiosAssertResult<R, T> = R extends AxiosResponseResult
  ? Promise<AxiosResponseResult<T>>
  : Promise<T>;

/**
 * 创建 Axios 实例
 */
const createAxiosInstance = <Result = AxiosResponseResult>(
  config: AxiosDefaultConfig
) => {
  // 创建 Axios 实例
  const axios = Axios.create(config);

  // 注册 Axios 拦截器
  const proxy = createAxiosInterceptor(axios);

  // T 响应数据类型
  // D 接口参数类型
  // R 指定响应数据结构，默认使用 Result = AxiosResponseResult (即 { code, message, result })
  return <T = any, D = any, R = Result>(config: AxiosRequestConfig<D>) => {
    return proxy(config) as AxiosAssertResult<R, T>;
  };
};
```

```typescript:line-numbers [通用接口实例]
/**
 *  范例 - request
 */
export const request = createAxiosInstance({
  baseURL: "/api",
  messager: true, // 开启 Error 消息全局处理
  timeout: 30000
});
```

```typescript:line-numbers [上传接口实例]
/**
 *  范例 - upload
 */
export const upload = createAxiosInstance<any>({
  baseURL: "/api/upload",
  responseType: "blob", // 文件流
  timeout: 0 // 取消超时限制
});
```

:::

## 接口定义规范

::: details 范例 - 登录用户 {open}

::: code-group

```typescript:line-numbers [接口定义]
import { request } from "@/utils/request";

/**
 * 系统登录
 *    T: 返回数据类型
 *    D: 接口参数类型
 */
export function login<T = any, D = any>(data: D) {
  return request<T, D>({
    url: "/auth/login",
    method: "post",
    data: data
  });
}
```

```typescript:line-numbers [接口调用]
import * as authApi from "@/api/auth";

/**
 * 响应数据
 */
interface CustomResult {
  token: string;
  data: Record<string, any>;
}

/**
 * 获取登录用户
 */
const login = async (params: Record<string, any> = {}) => {
  /*
   * 返回数据类型: CustomResult
   * 接口参数类型: Record<string, any>
   */
  return authApi.login<CustomResult>(params).then(res => {
    if (res.code !== "0000") {
      return Promise.reject(res);
    }

    // res.result: CustomResult 类型
    //
    //  {
    //    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.xxxxxxxxxxxxxxxxxx",
    //    "data": { "name": "lin", "job": "developer" }
    //  }

    return res;
  });
};
```
