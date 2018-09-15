# Page
---
- 该组件主要用做页面容器。建议所有的页面的根元素都为page.
- 该组件内置了 ```面包屑``` 和 ```回到顶部``` 组件

```html
<template>
	<lr-page>
	    <!-- 设置附标题 -->
	    <div slot="subTitle">设置附标题</div>
		<!-- 页面内容 -->
		<div>
		</div>
		<!-- 弹窗统一放到 slot="dialog" 下 -->
		<div slot="dialog">
		</div>
	</lr-page>
</template>

```