# 全局变量
```js
this.$enum //enum.js内部的常量列表
this.$api // api/index.js 中配置的接口地址
this.$moment // moment对象，用于日期处理
```


# 全局方法
---
```js
this.$loading.open() // 打开弹窗
this.$loading.close() // 关闭弹窗

this.$message.success() // element-ui 中显示成功消息
this.$message.error() // element-ui 中显示错误消息
this.$message.warning()
this.$message.info()

```