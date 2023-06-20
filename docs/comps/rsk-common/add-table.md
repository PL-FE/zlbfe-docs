## AddTable

表格中新增添加行的场景使用


### 基础用法

:::demo
```html
<template>
  <v-add-table
    :table-list.sync="tableList"
    :columns="columns"
  >
  </v-add-table>
</template>

<script>
export default {
  data() {
    return {
        tableList:[],
        columns:  [
        { label: '税种', key: 'taxCode' },
        { label: '奖励比例', key: 'ratio' },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
```

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| fill | 增加类名 'is-fill' | boolean | — | false |

其他继承自 `el-button`