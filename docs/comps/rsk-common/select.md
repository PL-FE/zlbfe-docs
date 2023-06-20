## VSelect

表格中新增添加行的场景使用

### 基础用法

:::demo

```html
<v-select
  v-model="selectValue"
  placeholder="选择客户所在区域"
  :options="options"
></v-select>

<script>
  export default {
    data() {
      return {
        selectValue: "1",
        options: [
          { value: "1", label: "南部大区" },
          { value: "2", label: "其他" },
        ],
      };
    },
    mounted() {},
    methods: {},
  };
</script>
```

:::

### 传入 枚举 Code

:::demo

```html
<v-select
  v-model="selectValue"
  placeholder="选择客户所在区域"
  enumCode="AdviserIdentityEnum"
></v-select>

<script>
  export default {
    data() {
      return {
        selectValue: "1",
      };
    },
    mounted() {},
    methods: {},
  };
</script>
```

:::

## 属性

| 参数 | 说明               | 类型    | 可选值 | 默认值 |
| ---- | ------------------ | ------- | ------ | ------ |
| fill | 增加类名 'is-fill' | boolean | —      | false  |

其他继承自 `el-button`
