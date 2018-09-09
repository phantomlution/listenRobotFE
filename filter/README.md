# 内置filter
---
全局的内置filter在 ```src/filters/index.js``` 文件中

目前有以下filter
- ```date```: 将日期转换成年月日
- ```datetime```: 将日期转换成 年月日-时分秒 
- ```fromNow```: 将日期友好展示(例如: 几秒前)


``` html
<!-- 用法 -->
<div>
	<div>{{ date | date }}</div>
	<div>{{ date | datetime }}</div>
	<div>{{ date | fromNow }}</div>
</div>
```
> 局部filter请写在当前文件中
例如
```js
export default {
  data() {
  	return {
  	}
  },
  filter: {
  	name(str) { // 局部自定义filter
  		return str
  	}
  }
}
```