# 列表页面
---
```html
<template>
  <lr-page>
    <lr-table ref="table" :page="page" :search="getSearchModel" :url="url">
      <div slot="search">
        <el-input v-model="searchModel.name" placeholder="按照名字搜索">
          <span slot="append" @click="doSearch" >搜索</span>
        </el-input>
      </div>
      <div slot="action">
        <el-button @click="visible = true">打开弹窗</el-button>
      </div>
      <el-table :data="page.list">
        <el-table-column type="selection" />
        <el-table-column label="名称" prop="name" />
        <el-table-column label="名称" prop="test" />
        <el-table-column label="名称" prop="name" />
        <el-table-column label="名称" prop="name" />
      </el-table>
    </lr-table>
    <div slot="dialog">
      <lr-dialog :visible.sync="visible" title="测试" @close="close" @confirm="confirm">
        对话框
      </lr-dialog>
    </div>
  </lr-page>
</template>

<script>
export default {
  data() {
    return {
      url: '/static/test.json',
      page: new this.$page(),
      visible: false,
      searchModel: { // 搜索条件
        name: ''
      }
    }
  },
  methods: {
    getSearchModel() {
      return {
        name: this.searchModel.name
      }
    },
    close() {
      console.log('close')
    },
    confirm() {
      console.log('confirm')
    },
    doSearch() { // 点击按钮触发搜索
      this.$refs.table.doSearch()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
```