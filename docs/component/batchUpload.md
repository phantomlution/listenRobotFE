# 批量excel上传弹窗
---
参数说明
- downloadUrl: 模板文件下载地址
- uploadUrl: excel上传地址
- text: 模块名称(例如: 线索)

```html
<lr-batch-upload :visible.sync="dialogVisible" @confirm="confirm" download-url="www.baidu.com" upload-url="www.baidu.com" title="线索" />
```