```typescript [-> Mock 数据]
import { promiser, resolver, worker, rester } from "@/mock/setup";
import { http, HttpResponse } from "msw";

const tag = "获取组织 Tree 列表";
const url = resolver("/organize/getOrganizeInfoTree");

worker.use(
  http.post(url, async (req) => {
    const body = await rester.body(req);
    const query = await rester.query(req);
    const params = await rester.params(req);
    const printer = await rester.printer(tag);

    let resource: any = null;

    switch (body && body.params && body.params.orgId) {
      case "0": {
        resource = {
          code: "0000",
          message: null,
          result: [
            {
              key: "1",
              isOrg: "Y",
              isLeaf: false,
              title: "浙大远疆投资集团有限公司",
              orgShortName: "集团公司",
            },
          ],
        };
        break;
      }
      case "1": {
        resource = {
          code: "0000",
          message: null,
          result: [
            {
              key: "101.100",
              isOrg: "Y",
              isLeaf: false,
              title: "港运信息有限公司",
              orgShortName: "港运公司",
            },
          ],
        };
        break;
      }
      case "101.100": {
        resource = {
          code: "0000",
          message: null,
          result: [
            {
              key: "101.100.131",
              isOrg: "Y",
              isLeaf: true,
              title: "北仑网安通信有限公司",
              orgShortName: "北仑网安",
            },
            {
              key: "101.100.138",
              isOrg: "Y",
              isLeaf: true,
              title: "宁财港务有限公司",
              orgShortName: "宁财港务",
            },
          ],
        };
        break;
      }
      default: {
        resource = {
          code: "0000",
          message: null,
          result: [],
        };
      }
    }

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
