## VSelect

- 对 Element-ui 的下拉框进行了二次封装

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

### 传入 enumCode

:::demo `enumCode` 已经优化，不同组件的枚举会统一集中成一次请求，并且缓存在 `vuex` 中

```html
<v-select
  v-model="selectValue"
  placeholder="请选择渠道身份"
  enumCode="AdviserIdentityEnum"
></v-select>

<script>
  export default {
    data() {
      return {
        selectValue: "",
      };
    },
    mounted() {},
    methods: {},
  };
</script>
```

:::
::: warning
部分组件使用到接口，需要先手动登录 test 环境系统获取到 token，才可以正常进行请求。
[https://sso.test.zlbzb.cn/](https://sso.test.zlbzb.cn/)
:::

### 其他功能

:::demo

```html
<v-select
  v-model="selectValue"
  placeholder="选择需要的值"
  :options="options"
  chooseAll
  clearable
  multiple
></v-select>

<script>
  export default {
    data() {
      return {
        selectValue: "1",
        options: [
          { value: "1", label: "增值税" },
          { value: "2", label: "个人所得税" },
          { value: "3", label: "企业所得税" },
        ],
      };
    },
    mounted() {},
    methods: {},
  };
</script>
```

:::

## 属性

| 参数           | 说明                                                                                     | 类型            | 可选值 | 默认值 |
| -------------- | ---------------------------------------------------------------------------------------- | --------------- | ------ | ------ |
| disableValues  | 设置禁用的 value 值                                                                      | Array, Function | —      | -      |
| optionsDispose | 对 select 的 options 做特定处理                                                          | Function        | -      | -      |
| enumCode       | 根据枚举查询并生成 options 选项                                                          | String          | -      | -      |
| options        | options 选项                                                                             | Array, Object   | -      | -      |
| optionUrl      | 根据 URL 查询并生成 options 选项                                                         | String, Object  | -      | -      |
| labelKey       | 作为显示的字段，可以传字符串，也可以传数组字符串。当传数组字符串的时候会拼接两个字段的值 | String, Array   | -      | label  |
| valueKey       | 作为值的字段                                                                             | String          | -      | value  |
| clearable      | 是否能清空                                                                               | Boolean         | -      | true   |
| filterOption   | 自定义过滤选项                                                                           | Function        | -      | -      |
| multiple       | 多选                                                                                     | Boolean         | -      | false  |
| validAlways    | 是否在每次改变 options 验证值                                                            | Boolean         | -      | false  |
| chooseAll      | 选择全部 ,multiple 需要为 true                                                           | Boolean         | -      | false  |

其他继承自 `el-select`

## 事件

| 事件名称     | 说明              | 回调参数                                      |
| ------------ | ----------------- | --------------------------------------------- |
| changeOption | select 选择改变时 | value, option, { preValue }, preValue: 旧的值 |

其他继承自 `el-select`
