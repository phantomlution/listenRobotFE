# 状态下拉框
---
在 ```constant/enum.js``` 文件中定义好状态即可使用
```js
// 定义好的状态
export const followState = [ // 跟进状态
  { label: '已联系', value: 'k1', type: 'success' },
  { label: '未联系', value: 'k2', type: 'info' },
  { label: '联系中', value: 'k3', type: 'warning' },
  { label: '无', value: 'l4', type: 'info' }
]
```

```html
<!-- 在页面中使用 -->
<lr-select enumKey="followState" v-model="state"></lr-select>
```