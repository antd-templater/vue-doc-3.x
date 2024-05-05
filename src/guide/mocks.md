---
aside: false
---

# Mock 数据说明

::: details Mock 目录 {open}

```bash
  ├── src
  │   ├── mock                                 # Mock 定义
  │   │   │                                    #
  │   │   ├── auth                             # 认证接口
  │   │   │   ├── login.ts                     # 认证接口 - 系统登录 (提供 mock 数据)
  │   │   │   ├── loginUserInfo.ts             # 认证接口 - 获取用户信息 (提供 mock 数据)
  │   │   │   ├── loginUserMenu.ts             # 认证接口 - 获取用户菜单 (提供 mock 数据)
  │   │   │   ├── logout.ts                    # 认证接口 - 系统退出
  │   │   │   ├── modifyPassword.ts            # 认证接口 - 修改密码
  │   │   │                                    #
  │   │   ├── base                             # 字典接口
  │   │   │   ├── getOptionById.ts             # 字典接口 - 查询 Option 下拉框 (提供 mock 数据)
  │   │   │   ├── getTreeById.ts               # 字典接口 - 查询 Tree 下拉框 (提供 mock 数据)
  │   │   │                                    #
  │   │   ├── organize                         # 组织接口
  │   │   │   ├── addOrganizeInfo.ts           # 组织接口 - 新增组织信息
  │   │   │   ├── deleteOrganizeInfo.ts        # 组织接口 - 删除组织信息
  │   │   │   ├── getOrganizeInfoList.ts       # 组织接口 - 获取组织列表 (提供 mock 数据)
  │   │   │   ├── getOrganizeInfoTree.ts       # 组织接口 - 获取组织 Tree 列表 (提供 mock 数据)
  │   │   │   ├── modifyOrganizeInfo.ts        # 组织接口 - 修改组织信息
  │   │   │                                    #
  │   │   ├── resource                         # 资源接口
  │   │   │   ├── addResourceInfo.ts           # 资源接口 - 新增资源信息
  │   │   │   ├── deleteResourceInfo.ts        # 资源接口 - 删除资源信息
  │   │   │   ├── getResourceButtonByRole.ts   # 资源接口 - 根据角色查询按钮资源 (提供 mock 数据)
  │   │   │   ├── getResourceListInfo.ts       # 资源接口 - 查询资源信息 (提供 mock 数据)
  │   │   │   ├── getResourceMenuByRole.ts     # 资源接口 - 根据角色查询菜单资源 (提供 mock 数据)
  │   │   │   ├── getResourceTreeInfo.ts       # 资源接口 - 查询所有菜单资源 (提供 mock 数据)
  │   │   │   ├── modifyResourceInfo.ts        # 资源接口 - 修改资源信息
  │   │   │   ├── modifyResoureInfoByRole.ts   # 资源接口 - 修改角色资源配置
  │   │   │                                    #
  │   │   ├── role                             # 角色接口
  │   │   │   ├── addRoleInfo.ts               # 角色接口 - 新增角色信息
  │   │   │   ├── deleteRoleInfo.ts            # 角色接口 - 删除角色信息
  │   │   │   ├── getRoleInfoByPages.ts        # 角色接口 - 分页获取角色列表 (提供 mock 数据)
  │   │   │   ├── getRoleInfoList.ts           # 角色接口 - 获取所有角色列表 (提供 mock 数据)
  │   │   │   ├── modifyRoleInfo.ts            # 角色接口 - 修改角色信息
  │   │   │                                    #
  │   │   ├── user                             # 用户接口
  │   │   │   ├── addUserInfo.ts               # 用户接口 - 新增用户信息
  │   │   │   ├── deleteUserInfo.ts            # 用户接口 - 删除用户信息
  │   │   │   ├── getUserInfoList.ts           # 用户接口 - 获取用户列表 (提供 mock 数据)
  │   │   │   ├── modifyUserInfo.ts            # 用户接口 - 修改用户信息
  │   │   │                                    #
  │   │   ├── index.ts                         # 按需导入 上述 mock 接口服务
  │   │   ├── setup.ts                         # 定义 setupWorker (配合 public/msw.js 实现 Mock Service)
  │   │                                        #
  │   ├── main.ts                              # 主入口文件 (通过 `import '@/mock'` 启用 Mock 服务)

```

:::

## 认证接口

::: details 系统登录 `/api/auth/login`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  data: {
    userNo: "admin", // 用户账号
    userName: "admin", // 用户名称
    mobilePhone: "182588xxx88", // 用户手机号
    orgId: "101.100.131", // 用户所属组织 ID
    orgName: "北仑网安通信有限公司", // 用户所属组织 Name
    deptId: "1126534161135795132", // 用户所属部门 ID
    deptName: "软件部", // 用户所属部门 Name
    activity: "Y", // 启用用户账号
  },
  token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.xxxxxxxxxxx-xxx", // 用户 token
};
```

<!--@include: ../_/mock/auth/login.md-->

:::

::: details 获取用户信息 `/api/auth/loginUserInfo`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  userNo: "admin", // 用户账号
  userName: "admin", // 用户名称
  postName: "系统管理", // 用户职位
  mobilePhone: "182588xxx88", // 用户手机号
  orgId: "101.100.131", // 用户所属组织 ID
  orgName: "北仑网安通信有限公司", // 用户所属组织 Name
  deptId: "1126534161135795132", // 用户所属部门 ID
  deptName: "软件部", // 用户所属部门 Name
  dataFlag: "2", // 数据范围 flag
  activity: "Y", // 启用用户账号
  role: {
    permissions: [
      {
        permissionId: "ResourceManage", // 资源管理页面
        actionEntitySet: [
          { action: "add", defaultCheck: false, describe: "新增" }, // 按钮权限 - 新增 v-action:add
          { action: "del", defaultCheck: false, describe: "删除" }, // 按钮权限 - 删除 v-action:del
        ],
      },
    ],
  },
};
```

<!--@include: ../_/mock/auth/loginUserInfo.md-->

:::

::: details 获取用户菜单 `/api/auth/loginUserMenu`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  id: "27245863256459422", // 路由 ID
  sort: 1000000, // 菜单排序
  name: "system", // 路由 name
  path: "", // 路由 path
  parentId: "0", // 父路由 ID
  component: "PageView", // 路由组件
  redirect: "/system/OrganizeManage", // 路由重定向
  meta: {
    icon: "", // 菜单 icon
    title: "系统管理", // 菜单 title
    hideChildInMenu: "N", // 是否隐藏子菜单
    hideInMenu: "N", // 是否隐藏当前菜单
    allowCache: "Y", // 是否启用缓存
  },
};
```

<!--@include: ../_/mock/auth/loginUserMenu.md-->

:::

## 字典接口

::: details 查询 Option 下拉框 `/api/base/getOptionById`

::: code-group

```typescript [字段说明]
// 范例:
const result = [
  {
    label: "label", // 选项 label 文本
    value: "value", // 选项 value 值
  },
];
```

<!--@include: ../_/mock/base/getOptionById.md-->

:::

::: details 查询 Tree 下拉框 `/api/base/getTreeById`

::: code-group

```typescript [字段说明]
// 范例:
const result = [
  {
    label: "label", // 选项 label 文本
    value: "value", // 选项 value 值
    children: [
      {
        label: "label", // 子选项 label 文本
        value: "value", // 子选项 value 值
      },
    ],
  },
];
```

<!--@include: ../_/mock/base/getTreeById.md-->

:::

## 组织接口

::: details 分页查询组织列表 `/api/organize/getOrganizeInfoList`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  key: "1", // 组织 ID
  isOrg: "Y", // 是组织 (组织 'Y', 部门 'N')
  isLeaf: false, // 是否为叶子结点
  title: "浙大远疆投资集团有限公司", // 组织/部门 名称
  orgShortName: "集团公司", // 组织/部门 简称
  parentOrgId: "0", // 父组织 名称
  parentOrgName: "", // 父组织 ID
  activity: "Y", // 启用状态
};
```

<!--@include: ../_/mock/organize/getOrganizeInfoList.md-->

:::

::: details 获取组织 Tree 列表 `/api/organize/getOrganizeInfoTree`

::: code-group

```typescript [字段说明]
// 范例:
const result = [
  {
    key: "1", // 组织 ID
    isOrg: "Y", // 是组织 (组织 'Y', 部门 'N')
    isLeaf: false, // 是否为叶子结点
    title: "浙大远疆投资集团有限公司", // 组织/部门 名称
    orgShortName: "集团公司", // 组织/部门 简称
  },
];
```

<!--@include: ../_/mock/organize/getOrganizeInfoTree.md-->

:::

## 资源接口

::: details 根据角色查询按钮资源 `/api/resource/getResourceButtonByRole`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  id: "1127282136000102507", // 菜单资源 id
  actionsOptions: [
    { label: "新增", value: "1127282136000102508" }, // 按钮权限: label -> 新增文本, value -> 新增按钮 id 值
    { label: "删除", value: "1127282136000102509" }, // 按钮权限: label -> 删除文本, value -> 删除按钮 id 值
    { label: "修改", value: "1127282136000102510" }, // 按钮权限: label -> 修改文本, value -> 修改按钮 id 值
    { label: "查询", value: "1127282136000102511" }, // 按钮权限: label -> 查询文本, value -> 查询按钮 id 值
  ],
  selected: [
    "1127282136000102508", // 已启用 新增 按钮资源
    "1127282136000102509", // 已启用 删除 按钮资源
    "1127282136000102510", // 已启用 修改 按钮资源
    "1127282136000102511", // 已启用 查询 按钮资源
  ],
};
```

<!--@include: ../_/mock/resource/getResourceButtonByRole.md-->

:::

::: details 分页查询资源信息 `/api/resource/getResourceListInfo`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  sort: 1000100, // 菜单资源 - 排序 (Layout.sider 菜单顺序)
  path: "/system/OrganizeManage", // 菜单路由 - path
  icon: "CodepenOutlined", // 菜单资源 - icon
  title: "组织管理", // 菜单资源 - title
  redirect: "", // 菜单路由 - 重定向
  parentId: "27245863256459422", // 菜单路由 - 父 id
  component: "OrganizeManage", // 菜单路由 - 组件
  resourceId: "1127282136000102507", // 菜单路由 - id
  resourceName: "OrganizeManage", // 菜单路由 - name
  resourceType: "m", // 菜单资源 - 类型, 'm' -> 菜单, 'b' -> '按钮'
  hideChildInMenu: "N", // 隐藏子菜单资源
  hideInMenu: "N", // 隐藏当前菜单资源
  allowCache: "Y", // 启用路由缓存
  activity: "Y", // 启用菜单资源
};
```

<!--@include: ../_/mock/resource/getResourceListInfo.md-->

:::

::: details 根据角色查询菜单资源 `/api/resource/getResourceMenuByRole`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  treeNodes: [
    {
      label: "根目录", // 菜单资源 名称
      value: "0", // 菜单资源 id 值
      children: [
        {
          label: "系统管理", // 子菜单资源 名称
          value: "27245863256459422", // 子菜单资源 id 值
          children: [
            { label: "组织管理", value: "1127282136000102507" },
            { label: "资源管理", value: "27245863256459445" },
            { label: "角色管理", value: "27245863256459495" },
            { label: "用户管理", value: "1127282136000102579" },
          ],
        },
      ],
    },
  ],
  treeSelect: [
    "27245863256459422", // 菜单资源 - 组织管理 (已选择)
    "1127282136000102507", // 菜单资源 - 系统管理 (已选择)
    "27245863256459445", // 菜单资源 - 资源管理 (已选择)
    "27245863256459495", // 菜单资源 - 角色管理 (已选择)
    "1127282136000102579", // 菜单资源 - 用户管理 (已选择)
  ],
};
```

<!--@include: ../_/mock/resource/getResourceMenuByRole.md-->

:::

::: details 查询所有菜单资源 `/api/resource/getResourceTreeInfo`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  sort: 1000100, // 菜单资源 - 排序 (Layout.sider 菜单顺序)
  path: "/system/OrganizeManage", // 菜单路由 - path
  icon: "CodepenOutlined", // 菜单资源 - icon
  title: "组织管理", // 菜单资源 - title
  redirect: "", // 菜单路由 - 重定向
  parentId: "27245863256459422", // 菜单路由 - 父 id
  component: "OrganizeManage", // 菜单路由 - 组件
  resourceId: "1127282136000102507", // 菜单路由 - id
  resourceName: "OrganizeManage", // 菜单路由 - name
  resourceType: "m", // 菜单资源 - 类型, 'm' -> 菜单, 'b' -> '按钮'
  hideChildInMenu: "N", // 隐藏子菜单资源
  hideInMenu: "N", // 隐藏当前菜单资源
  allowCache: "Y", // 启用路由缓存
  activity: "Y", // 启用菜单资源
  children: [], // 子菜单资源
};
```

<!--@include: ../_/mock/resource/getResourceTreeInfo.md-->

:::

## 角色接口

::: details 分页获取角色列表 `/api/role/getRoleInfoByPages`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  orgId: "101.100.131", // 组织 id
  roleId: "27442970747734159", // 角色 id
  roleName: "系统管理", // 角色名称
  dataFlag: "2", // 角色数据范围 (0 -> 用户级, 1 -> 部门级, 2 -> 公司级)
  activity: "Y", // 角色状态 - 启用
};
```

<!--@include: ../_/mock/role/getRoleInfoByPages.md-->

:::

::: details 获取所有角色列表 `/api/role/getRoleInfoList`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  orgId: "101.100.131", // 组织 id
  roleId: "27442970747734159", // 角色 id
  roleName: "系统管理", // 角色名称
  dataFlag: "2", // 角色数据范围 (0 -> 用户级, 1 -> 部门级, 2 -> 公司级)
  activity: "Y", // 角色状态 - 启用
};
```

<!--@include: ../_/mock/role/getRoleInfoList.md-->

:::

## 用户接口

::: details 分页查询用户列表 `/api/user/getUserInfoList`

::: code-group

```typescript [字段说明]
// 范例:
const result = {
  userNo: "lin", // 用户账号
  userName: "林某", // 用户名称
  password: "12345678", // 用户密码
  mobilePhone: "182588xxx88", // 用户手机号
  idCard: "330204198603281111", // 用户身份证
  orgId: "101.100.131", // 用户所属组织 ID
  orgName: "北仑网安通信有限公司", // 用户所属组织 Name
  deptId: "1126534161135795132", // 用户所属部门 ID
  deptName: "软件部", // 用户所属部门 Name
  roleId: ["27442970747734159"], // 用户所拥有角色组
  postName: "系统管理", // 用户职位
  activity: "Y", // 用户账号状态
};
```

<!--@include: ../_/mock/user/getUserInfoList.md-->

:::
