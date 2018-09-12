# 新增/修改页面格式
---

```html
<template>
  <div>
    <lr-loading-panel :state.sync="state" @init="doInit">
      <el-form :model="formModel" ref="form">
        <!-- 校验规格使用内联格式 -->
        <el-form-item prop="name" :rules="[ { required: true, message: '请填写用户名' }]">
          <el-input v-model.trim="formModel.name" />
        </el-form-item>
        <el-form-item prop="age" :rules="[ { required: true, message: '请填写年龄' } ]"></el-form-item>
      </el-form>
      
      <el-button @click="save">保存数据</el-button>
    </lr-loading-panel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 0,
      formModel: {
        name: '',
        age: ''
      }
    }
  },
  computed: {
    id() { // 如果是编辑页面，则 id 不为空
      return this.$route.params.id || ''
    }
  },
  methods: {
    doInit() {
      if (!this.id) { // 新增页面不加载外部数据
        this.state = 1
      } else {
        this.$http.get('url').then(data => {
          // TODO 做一些数据处理
          this.state = 1
        }).catch(err => {
          this.state = 2
        })
      }
    },
    save() { // 用户点击保存
      this.$refs.form.validate(valid => { // 提交前必须要对数据进行校验
        if (valid) { // 校验通过后进行数据提交
        }
      })
    }
  }
}  
</script>
```