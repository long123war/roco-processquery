# 1. 劳卡工艺查询辅助页面 API 接口

## 1.1. API V1 接口说明

- 接口基准地址：`http://127.0.0.1:8080/`
- 服务端已开启 CORS 跨域支持
- 数据返回格式统一使用 JSON

### 1.1.1. 支持的请求方法

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

### 1.1.2. 通用返回状态说明

| _状态码_ | _含义_                | _说明_                                              |
| -------- | --------------------- | --------------------------------------------------- |
| 200      | OK                    | 请求成功                                            |
| 201      | CREATED               | 创建成功                                            |
| 204      | DELETED               | 删除成功                                            |
| 400      | BAD REQUEST           | 请求的地址不存在或者包含不支持的参数                |
| 401      | UNAUTHORIZED          | 未授权                                              |
| 403      | FORBIDDEN             | 被禁止访问                                          |
| 404      | NOT FOUND             | 请求的资源不存在                                    |
| 422      | Unprocesable entity   | [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误 |
| 500      | INTERNAL SERVER ERROR | 内部错误                                            |
|          |                       |                                                     |

---

## 1.2. 定制模块

### 1.2.1. 定制模块列表

- 请求路径：Custom
- 请求方法：get
- 请求参数

- 响应参数

| 参数名    | 参数说明     | 备注 |
| --------- | ------------ | ---- |
| id        | 定制模块 ID  |      |
| menusName | 定制模块名称 |      |
| children  | 子列表       |      |

- 响应数据

| 参数名    | 参数说明     | 备注 |
| --------- | ------------ | ---- |
| menusName | 列表菜单名称 |      |
| children  | 子菜单列表   |      |
| path      | 地址值       |      |

```Array
[
    {
        "id": "0",
        "menusName": "门窗定制",
        "children": [
            {
                "id": "0",
                "menusName": "单开门",
                "children": [],
                "path": "single"
            },
            {
                "id": "1",
                "menusName": "子母门",
                "children": [],
                "path": "doubles"
            },
            {
                "id": "2",
                "menusName": "双开门",
                "children": [],
                "path": "lash"
            },
        ]
]
```

### 1.2.2. 门窗定制范围查询

- 请求路径：doorProcess
- 请求方法：get
- 请求参数：productName

- 响应参数

| 参数名      | 参数说明     | 备注 |
| ----------- | ------------ | ---- |
| productName | 定制产品名称 |      |

- 响应参数

| 参数名        | 参数说明       | 备注 |
| ------------- | -------------- | ---- |
| doorWayMinw   | 门洞范围最小 W |      |
| doorWayMaxw   | 门洞范围最大 W |      |
| doorWayMinh   | 门洞范围最小 H |      |
| doorWayMaxh   | 门洞范围最大 H |      |
| doorframeMinw | 包框范围最小 W |      |
| doorframeMaxw | 包框范围最大 W |      |
| doorframeMinH | 包框范围最小 H |      |
| doorframeMaxH | 包框范围最大 H |      |

```Object
{
    "doorWayMinw": 1228,
    "doorWayMaxw": 1988,
    "doorWayMinh": 1746,
    "doorWayMaxh": 2356,
    "doorframeMinw": 1208,
    "doorframeMaxw": 1948,
    "doorframeMinH": 1736,
    "doorframeMaxH": 2336
}
```

### 1.2.3. 计算包框尺寸的值

- 请求路径：doorProcess/results
- 请求方法：get
- 请求参数：
  doorWayWvalue
  doorWayHvalue
  wayD

- 响应参数

| 参数名        | 参数说明 | 备注 |
| ------------- | -------- | ---- |
| doorWayWvalue | 门洞宽   |      |
| doorWayHvalue | 门洞高   |      |
| wayD          | 墙厚     |      |

- 响应参数

| 参数名          | 参数说明   | 备注 |
| --------------- | ---------- | ---- |
| doorframeWvalue | 下单包框宽 |      |
| doorframeHvalue | 下单包框高 |      |

```Object
{
    "doorframeWvalue": 1736,
    "doorframeHvalue": 635
}
```
