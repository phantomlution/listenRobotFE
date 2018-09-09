# CSS规范
---
> 项目中使用的是[SCSS](https://www.sass.hk/guide/)

- ```命名规范```: 所有css以 ```lr-``` 开头
- ```命名风格(推荐)```: 命名风格采用BEM风格 
- ```css变量```: 全局的css变量在 ```src/styles/variables.scss``` 文件中定义
- ```mixin```: 通用的mixin在 ```src/styles/mixin.scss``` 文件中定义

# BEM 风格简介
- ```B```: Block(块)
- ```E```: Element(元素)
- ```M```: Modifier(修饰符)

核心点
- 块使用 ```-``` 分割
- 块内元素使用```__```双下划线进行分隔
- 修饰元素使用```_``` 单下划线进行分隔

例如
```css
lr-form{} //B
lr-form__input{} // B + E
lr-form__input_disable{}// B + E + M
```