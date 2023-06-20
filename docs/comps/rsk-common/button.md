## Button 按钮

- 对 Element-ui 的按钮做了样式修改
- 内部做了防抖节流

### 基础用法

:::demo 用法与 el-button 类似

```html
<v-button @click="handleClick" type="primary"> 按钮 </v-button>
<v-button @click="handleClick" type="primary" fill> 按钮 </v-button>
<script>
  export default {
    methods: {
      handleClick() {
        this.$message.success("点击了");
      },
    },
  };
</script>
```

:::

### 自带防抖

:::demo

```html
<v-button @click="handleClick" type="primary"> 快速点击按钮 </v-button>
<script>
  export default {
    methods: {
      handleClick() {
        this.$message.success("点击了");
      },
    },
  };
</script>
```

:::

### 扩展 Icon

:::demo

```html
<v-button type="primary" icon="v-icon v-icon-font v-icon-search"></v-button>
<v-button type="primary" icon="v-icon v-icon-font v-icon-money"></v-button>
<v-button type="primary" icon="v-icon v-icon-font v-icon-XFTX"></v-button>
<v-button type="primary" icon="v-icon v-icon-font v-icon-zybj"></v-button>
```

:::

## 属性

| 参数 | 说明               | 类型    | 可选值 | 默认值 |
| ---- | ------------------ | ------- | ------ | ------ |
| fill | 增加类名 'is-fill' | boolean | —      | false  |

其他继承自 `el-button`
