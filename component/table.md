# Table 
---
- 对分页的逻辑进行了封装

```html
<template>
	<lr-table :page="page" :url="url" :search="getSearchModel" :processData="processData" ref="table">
		<div slot="search">
			<!-- 搜索区 -->
		</div>
		<div slot="action">
			<!-- 表格操作区 -->
		</div>
		<el-table :data="page.list">
			<el-table-column type="selection" />
			<el-table-column label="名称" prop="name" />
		</el-table>
	</lr-table>
</template>

<script>
export default {
	data() {
		return {
			page: new this.$page(),
			url: '/static/test.json', // 接口地址
		}
	},
	methods: {
		getSearchModel() { // [选填]根据当前的搜索条件，返回需要搜索的json
			return {}
		},
		search() { // 当用户点击搜索后，可采用以下方式触发表格搜索
			this.$refs.table.doSearch()
		},
		processData(data) { // 分页数据加载后，可能需要做一些自定义的处理, 返回新的列表
			return data
		}
	}

}
</script>
```