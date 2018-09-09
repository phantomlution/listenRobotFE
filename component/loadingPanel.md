# LoadingPanel
---
页面数据加载状态的控制，主要用于加载页面依赖数据

```html
<template>
	<lr-loading-panel :state.sync="state" @init="doInit">
		<!-- 加载成功后要显示的内容 -->
	</lr-loading-panel>
</template>

<script>
export default {
	data() {
		state: 0 // 0加载中 | 1 加载成功 | 2 加载失败
	},
	methods: {
		doInit() { // 页面初始化调用的函数
			if (true) {
				this.state = 1 // 修改状态成加载成功
			} else {
				this.state = 2 // 修改状态为加载失败，加载时候后，用户点击重新加载，回再次出发当前函数
			}
		}
	}
}
</script>
```