```typescript [-> Mock 数据]
import { promiser, resolver, worker, rester } from "@/mock/setup";
import { http, HttpResponse } from "msw";

const tag = "获取所有角色列表";
const url = resolver("/role/getRoleInfoList");

worker.use(
  http.post(url, async (req) => {
    const body = await rester.body(req);
    const query = await rester.query(req);
    const params = await rester.params(req);
    const printer = await rester.printer(tag);

    const resource = {
      code: "0000",
      message: null,
      result: [
        {
          orgId: "101.100.131",
          roleId: "27442970747734159",
          roleName: "系统管理",
          dataFlag: "2",
          activity: "Y",
        },
      ],
    };

    // 打印日志 (浏览器端)
    printer((log) => {
      log("[body] - ", body);
      log("[query] - ", query);
      log("[params] - ", params);
      log("[resource] - ", resource);
    });

    // 延时 0s, 即返回响应
    return promiser(HttpResponse.json(resource), 0);
  })
);
```
