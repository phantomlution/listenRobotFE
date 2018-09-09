# 网络请求
---
- 接口返回值都是 ```Promise```
- ```url```, 请求地址，请写在 ```src/api/index.js```
- ```data```, 请求的body
- ```options ```, axios 的一些参数，若要在url中带参数，则
```js
options = { params: { name: '123' } }
```

## get 请求(用于查询数据)
```js
this.$http.get(url, options).then(data => {
	//返回数据后处理
}).catch(err => {
	//额外的异常处理	
})
```

## post 请求(用于新增数据)
```js
this.$http.post(url, data, options).then(data => {
	//返回数据后处理
}).catch(err => {
	//额外的异常处理	
})
``` 

## put 请求(用于更新旧数据)
```js
this.$http.put(url, data, options).then(data => {
	//返回数据后处理
}).catch(err => {
	//额外的异常处理	
})
```

## delete 请求(删除数据)
```js
this.$http.delete(url, options).then(data => {
	//返回数据后处理
}).catch(err => {
	//额外的异常处理	
})

```