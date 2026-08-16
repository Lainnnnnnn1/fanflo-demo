# FanFlo 繁花毛织 — 独立站样板（demo）

给舅舅看的跨境电商独立站样板。纯静态，零后端，浏览器直接打开。

## 快速开始

```bash
cd ~/Projects/duozhan
python3 -m http.server 8899
# 浏览器打开 http://127.0.0.1:8899
```

## 页面

| 路径 | 内容 |
|---|---|
| / | 首页：hero + 分类 + 新品墙 + 品牌故事 |
| /products.html | 全部商品 + 分类筛选 |
| /product.html?id=1 | 商品详情（尺码/数量/加购） |
| /cart.html | 购物车（改数量/删除/合计） |
| /checkout.html | 结账（收货信息 + 模拟支付 + 成功页） |

## 技术
- 原生 HTML/CSS/JS，无框架
- 购物车 localStorage（key: `weave_cart`）
- 商品数据 `js/data.js`，渲染 `js/app.js`
- 商品图：JS 动态生成 SVG 毛衣插画（无外网依赖）

## 设计
见 PRODUCT.md（定位）与 DESIGN.md（设计系统）。
