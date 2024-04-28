---
aside: false
---

# Git 分支设计

基于如下四种常用系统开发环境，而设计的 `Git` 五种分支类型

- PRO 环境：用于生产环境
- DEV 环境：用于开发者调试使用
- FAT 环境：功能验收测试环境，用于测试环境下的测试人员测试使用
- UAT 环境：生产预发布环境，用于生产环境下的测试人员测试使用

  <br/>

  | 分支    | 名称         | 命名规范 | 运行环境 |
  | :------ | :----------- | :------: | :------: |
  | master  | 主分支       |    /     |   PRO    |
  | release | 预上线分支   |    /     |   UAT    |
  | develop | 测试分支     |    /     |   FAT    |
  | feature | 需求开发分支 | feat-xxx |   DEV    |
  | hotfix  | 紧急修复分支 | fix-xxx  |   DEV    |

  <br/>

```bash
  # master 分支
  a. master 为主分支，用于部署到正式环境（PRO）
  b. 一般由 release 分支合并，任何情况下不允许直接在 master 分支上修改代码

  # release 分支
  a. release 为预上线分支，用于部署到预上线环境（UAT）始终保持与 master 分支一致
  b. 一般由 develop 或 hotfix 分支合并，不建议直接在 release 分支上直接修改代码
  c. 如果在 release 分支测试出问题，需要回归验证 develop 分支看否存在此问题

  # develop 分支
  a. develop 为测试分支，用于部署到测试环境（FAT），始终保持最新完成以及 bug 修复后的代码
  b. 可根据需求大小程度确定是由 feature 分支合并，还是直接在上面开发
  c. 一定是满足测试的代码才能往上面合并或提交。

  # feature 分支
  a. feature 为需求开发分支，命名规则为【 feat- 】开头，一旦该需求上线，分支本地预留 3-7 天后将其删除

  # hotfix 分支
  a. hotfix 为紧急修复分支，命名规则为【 fix- 】开头
  b. 当线上出现紧急问题需要马上修复时，需要基于 release 或 master 分支创建 hotfix 分支
  c. 修复完成后，再合并到 release 或 develop 分支，一旦修复上线，分支本地预留 1-3 天后将其删除
```
