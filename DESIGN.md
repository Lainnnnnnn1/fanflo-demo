# DESIGN.md — FanFlo 繁花毛织 设计系统

## 物理场景
舅舅在手机/电脑上打开链接，第一眼 30 秒内要判断"这像个能卖货的店"。
客户在浏览时会感受到：暖、安静、织物质感。

## 色板（暖调，无纯黑白）
| Token | 值 | 用途 |
|---|---|---|
| --bg | #FAF7F2 | 页面底（暖米白） |
| --surface | #F3EDE4 | 卡片/区块底 |
| --ink | #2A241E | 主文字（暖深棕） |
| --ink-soft | #6E6458 | 次要文字 |
| --accent | #A35D3D | 陶土棕：按钮/价格/链接 |
| --accent-deep | #85482E | hover/按压 |
| --line | #E4DACB | 分隔线 |
| --ok | #5B7A54 | 成功（结账完成） |

## 字体
- 标题：Songti SC / STSong / Georgia（中文宋体标题=东方织物感）
- 正文：PingFang SC / Hiragino Sans GB / system-ui
- 行高：标题 1.15，正文 1.7；正文行宽 ≤ 68ch

## 间距节奏
16 → 24 → 40 → 64 → 96（不平均分布）

## 组件
- 按钮：小圆角(4px)，accent 底，无阴影；hover 变深；≥44px 高
- 商品卡：图 + 名 + 材质 + 价，整卡可点；hover 图轻微放大(transform)
- 输入框：底边线式，focus 变 accent
- 导航：大字 logo + 细字链接，购物车徽标圆点

## 动效
- 只用 opacity/transform，ease-out 指数曲线，150-250ms
- 尊重 prefers-reduced-motion

## 禁止
- 不用纯黑纯白、不用紫色渐变、不用弹窗促销
- 不用衬线斜体大标题、不用胶囊徽章堆砌
- 卡片不嵌套
