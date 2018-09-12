# 图表
---
- 每个图表必须存在于独立的 ```.vue``` 文件中


```html
<!-- doughnut.vue | 后台首页的环形表格 -->
<template>
  <div :id="id" style="display: flex;justify-content: center;"/>
</template>

<script>
import G2 from '@antv/g2'
import { idGenerator } from '@/utils'

export default {
  // eslint-disable-next-line
  name: 'lr-dashboard-doughnut',
  data() {
    return {
      id: idGenerator.next()
    }
  },
  mounted() {
    const data = [
      { country: 'A类 意向很强', value: 50 },
      { country: 'B类 意向较强', value: 30 },
      { country: 'C类 意向一般', value: 11 },
      { country: 'D类 无意向', value: 0 },
      { country: 'E类 未沟通成功', value: 14 },
      { country: 'F类 号码无效', value: 5 }
    ]

    const chart = new G2.Chart({
      container: this.id,
      width: 400,
      height: 400,
      padding: [0, 20, 60, 20]
    })
    chart.source(data)
    chart.coord('theta', {
      radius: 0.75,
      innerRadius: 0.6
    })

    chart.guide().html({
      position: ['50%', '50%'],
      html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
      alignX: 'middle',
      alignY: 'middle'
    })

    chart.guide().arc({
      top: true,
      start: [-0.25, 0],
      end: [-0.25, -180],
      style: {}
    })

    chart.legend({
      position: 'bottom',
      marker: 'square',
      clickable: false,
      itemWidth: 100
    })
    chart.intervalStack().position('value').color('country')

    chart.render()
  }
}
</script>
```