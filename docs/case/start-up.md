# 如何开发一张页面
---
- 1. 在 ```src/views``` 目录下创建一个```.vue```文件(例如: test.vue)
```html
<!-- test.vue -->
<template>
	<div>
		test.vue
	</div>
<template>
<script>
export default {

}
</script>
```

- 2. 在 ```src/router/index.js``` 文件夹中配置路由地址
```js
// 在  constantRouterMap 中追加配置
export const constantRouterMap = [
	...旧配置
	{
		path: '路径',
		component: () => import('@/views/当前vue文件地址'),
		name: '路由组件名称，唯一，不允许出现中文',
		meta: {
			title: '页面上路由显示的名称'
		}
	}
]

```

- 3. 在页面上点击当前菜单查看效果