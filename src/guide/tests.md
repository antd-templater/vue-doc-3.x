---
aside: false
---

# Test 测试工具

::: details 测试相关 (Cypress、Vitest) {open}

```bash
  ├── cypress                              # Cypress 资源配置
  │   ├── downloads                        # 下载 - 资源存储区
  │   ├── fixtures                         # 定义 - 本地静态数据
  │   ├── support                          # 储存 - 测试辅助资源
  │   │   ├── commands.ts                  #  support -> 定义 自定义命令 - cy.[command]
  │   │   ├── component-index.html         #  support -> 定义 组件测试 - 首页
  │   │   ├── component.ts                 #  support -> 定义 组件测试 - 资源
  │
  ├── test                                 # 测试脚本
  │   ├── cypress                          # cypress
  │   │   ├── -Login.vue.cy.ts             # 范例: cypress 测试 Login Vue 组件
  │   │   ├── tsconfig.json                # 定义: cypress TS 配置文件
  │   │                                    #
  │   ├── vitest                           # vitest
  │   │   ├── -utils.test.ts               # 范例: vitest 测试 Utils Api
  │   │   ├── tsconfig.json                # 定义: vitest TS 配置文件
  │
  ├── cypress.config.ts                    # Cypress 配置文件
  ├── vite.config.ts                       # Vitest 配置文件
```

:::

::: info Cypress、Vitest 两种测试工具:

- `Vitest` 由 Vite 驱动的测试工具，专注于为测试非浏览器逻辑提供最佳的体验 (例: 测试 Utils Api)。
- `Cypress` 基于 浏览器 的测试工具，专注于为测试浏览器中渲染效果提供最真实的反馈 (例: 测试 Vue 组件)。

:::

## Vitest

<img alt="Vitest" src="/vitest.png" style="border: solid 1px #cccccc; border-radius: 4px;">

::: details 测试用例、配置文件

::: code-group

```typescript:line-numbers [范例 - utils.test]
import { request } from "@/utils/request";
import { takeFixed } from "@/utils/common";
import { TakeFixed } from "@/utils/common";
import { takePadEnd } from "@/utils/common";
import { TakePadEnd } from "@/utils/common";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { AxiosError } from "axios";

vi.mock("@/store/user", () => {
  const module = {
    token: "",
    logout: () => Promise.resolve()
  };
  return { default: vi.fn(() => module) };
});

describe("@utils/common.ts", () => {
  it("Check Call takeFixed", () => {
    return expect(takeFixed("12.345", 2)).toBe("12.35");
  });

  it("Check Call takePadEnd", () => {
    return expect(takePadEnd("12.34", 3)).toBe("12.340");
  });

  it("Check Type takeFixed", () => {
    return expectTypeOf(takeFixed).toEqualTypeOf<TakeFixed>();
  });

  it("Check Type takePadEnd", () => {
    return expectTypeOf(takePadEnd).toEqualTypeOf<TakePadEnd>();
  });
});

describe("@utils/request.ts", () => {
  const server = setupServer(
    http.post("http://api.test.com/updateUserInfo", () => {
      return HttpResponse.json({
        code: "0000",
        message: null,
        result: "success"
      });
    }),

    http.get("http://api.test.com/loginUserInfo", () => {
      return HttpResponse.json({
        code: "0000",
        message: null,
        result: { name: "admin", email: "admin@gmail.com" }
      });
    })
  );

  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("Check request.post - eg. updateUserInfo", async () => {
    const options = {
      url: "http://api.test.com/updateUserInfo",
      method: "post"
    };
    const response = { code: "0000", message: null, result: "success" };
    await expect(request(options)).resolves.toMatchObject(response);
  });

  it("Check request.get - eg. loginUserInfo", async () => {
    const options = { url: "http://api.test.com/loginUserInfo", method: "get" };
    const response = {
      code: "0000",
      message: null,
      result: { name: "admin", email: "admin@gmail.com" }
    };
    await expect(request(options)).resolves.toMatchObject(response);
  });

  it("Check request.get - eg. unusableApi", async () => {
    const options = { url: "http://api.test.com/unusableApi", method: "get" };
    await expect(request(options)).rejects.toStrictEqual(
      expect.any(AxiosError)
    );
  });
});
```

```typescript:line-numbers [配置 - vite.config.ts]
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  const cwd = process.cwd();
  const env = loadEnv(mode, cwd);
  const base = env.VITE_APP_PAGE_BASE || "/";
  const offGzip = env.VITE_APP_ENABLE_GZIP !== "true";

  return {
    root: cwd,
    base: base,

    test: {
      globals: true,
      environment: "jsdom"
    }
  };
});
```

```json:line-numbers [配置 - ts.config.json]
{
  "compilerOptions": {
    "types": ["vitest/globals", "node"]
  }
}
```

:::

::: details 脚本运行 ==> pnpm test

- **vitest --ui**

:::

## Cypress

<img alt="Cypress" src="/cypress.png" style="border: solid 1px #cccccc; border-radius: 4px;">

::: details 测试用例、配置文件

::: code-group

```typescript:line-numbers [范例 - Login.vue.cy.ts]
import Login from "@/views/auth/Login.vue";

describe("Vue Component", () => {
  it("挂载渲染 - Login 组件", () => {
    cy.mount(Login);
  });

  it("模拟触发 - Input 校验", () => {
    cy.mount(Login);

    cy.get('input[type="text"]').as("usernameInput");
    cy.get('input[type="password"]').as("passwordInput");

    cy.get("@usernameInput").type("admin");
    cy.get("@passwordInput").type("password");

    cy.get("@usernameInput").should("have.value", "admin");
    cy.get("@passwordInput").should("have.value", "password");
  });
});
```

```typescript:line-numbers [配置 - cypress.config.ts]
import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1200,
  viewportHeight: 800,
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite"
    }
  }
});
```

```json:line-numbers [配置 - ts.config.json]
{
  "compilerOptions": {
    "types": ["cypress", "node"]
  }
}
```

:::

::: details 脚本运行 ==> pnpm cypress

- **cypress open --component**

:::
