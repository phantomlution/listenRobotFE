# Dialog
---
页面中用到的弹窗

```html
<template>
	<lr-dialog :visible.sync="visible" :title="title" @cancel="cancel" @confirm="confirm">
		<!-- 弹出框的内容 -->
	</lr-dialog>
</template>

<script>
export default {
	data() {
		return {
			title: '标题',
			visible: false
		}
	},
	methods: {
		confirm() { // 用户点击了确定按钮

		},
		cancel() { // 用户点击了取消按钮

		}
	}

}
</script>
```