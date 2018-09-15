# 表单编辑插件
---
嵌套在可编辑表单的外部，用于控制编辑状态

```html
<lr-form-editor :edit.sync="edit" @edit="edit = true" @confirm="confirm" @cancel="cancel">
    <el-form>
        <el-form-item></el-form-item>
    </el-form>
</lr-form-editor>
```

```js
export default {
    data() {
        return {
            edit: false // 表单编辑状态
        }
    },
    methods: {
        cancel() { // 用户点击取消
            // 回滚数据
        },
        confirm() { // 用户点击确定

        }
    }
}
```