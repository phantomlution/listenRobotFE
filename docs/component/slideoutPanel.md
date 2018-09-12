# 侧滑面板
---
从右侧弹出操作面板

```html
<template>
	<lr-slideout-panel :visible.sync="visible" @close="doClose" title="标题">
		<!-- 按钮区 -->
		<div slot="button">
		</div>
        内容插槽
    </lr-slideout-panel>
</template>

<script>
export default {
	data() {
		return {
			visible: false, // 是否显示
		}
	},
	methods: {
		doClose() { // 面板关闭回调函数
		}
	}
}
</script>

```