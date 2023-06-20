## VSearch

### 基本使用

:::demo

```html
<v-search
  ref="search"
  :conditions="conditions"
  enterSearch
  @search="handleSearch"
></v-search>

<script>
  export default {
    data() {
      return {
        conditions: new Array(10).fill(1).map((item, index) => {
          return {
            label: "下拉" + index,
            type: "select",
            multiple: true,
            key: "entpIds" + index,
            options: [
              {
                value: 1,
                label: "值1",
              },
              {
                value: 2,
                label: "值2",
              },
            ],
          };
        }),
      };
    },
    methods: {
      handleSearch(params) {
        console.log("params", params);
      },
    },
  };
</script>
```

:::

## 属性

| 参数                 | 说明                                                      | 类型    | 可选值 | 默认值 |
| -------------------- | --------------------------------------------------------- | ------- | ------ | ------ |
| conditions           | 配置项,具体配置看下方                                     | Array   | —      | -      |
| limit                | 限制每一行的个数                                          | Number  | —      | 3      |
| expend               | 是否展开, 默认会根据 limit 的个数自动计算，也可以手动指定 | Boolean | —      | false  |
| slotWidth            | 插槽宽度                                                  | Number  | —      | -      |
| enterSearch          | 是否需要回车搜索                                          | Boolean | —      | false  |
| tempCloseEnterSearch | 临时关闭 Enter 搜索                                       | Boolean | —      | false  |

## 事件

| 事件名称  | 说明                                | 回调参数                                                                |
| --------- | ----------------------------------- | ----------------------------------------------------------------------- |
| change    | toastType 为 `event` 时，触发的回调 | value：变化后的值,option：当前的 condition                              |
| search    | 点击搜索按钮时，触发当前事件        | params: 当前组件所有的搜索条件结果。返回的数据是通过 isEmpty 过滤后的值 |
|           |
| expandAll | 点击展开或收起按钮时触发            | 值为 true 表示展开，false 表示收起                                      |
| clearAll  | 清除当前选择的全部条件              |

# 方法

| 事件名称 | 说明 | 参数 |
| -------- | ---- | ---- |
| clearAll | 重置 | -    |

## conditions 的属性

### type: 条件类型

- input：普通 input 输入框，调用 el-input 组件
- valueRanger：普通 input 输入框，调用 value-ranger-input 组件
- select: 普通下拉选择框，调用 select 组件
- lazySelect：懒加载下拉选择框，调用 lazy-select 组件
- tree：树形结构下拉，调用 filter-tree 组件组件
- city：城市多级结构下拉选择，调用 city-cascader 组件
- industry：行业多级结构下拉选择，调用 industry-cascader 组件
- industryRoot：一级行业下拉选择，调用 el-select 组件
- date: 时间组件，调用 el-date-picker 组件
- dateRanger: 时间组件，调用 date-ranger-picker 组件

### key: 当前条件绑定的 key 值，用作结果输出

如果 type 为 valueRanger, dateRanger 时，key 为一个数组，输出结果会对 key(数组)进行解构

### label：当前条件的中文释义

### value: 用作初始化值

### filterOption

filterOption(option, conditionsValue, i): type 为 select 生效，过滤当前 select 的 options，返回 true 值显示，false 则隐藏

- option：当前的 condition 的 option 索引
- conditionsValue：整个 conditions 的结果，相当于 search 事件的 params
- i：当前 condition 的索引

#### 1.实现值的过滤

```javascript
const conditions = [
  {
    type: "select",
    label: "测试",
    key: "test",
    filterOption: (item, conditionsValue, i) => item.value > 2,
  },
];
```

#### 2.可以实现联动效果

条件“测试 2”由于“测试 1”(可以多个联动)值变化而变化

```javascript
const conditions = [
  {
    type: "select",
    label: "测试1",
    key: "test1",
  },
  {
    type: "select",
    label: "测试2",
    key: "test2",
    filterOption: (item, conditionsValue, i) => conditionsValue.test1 > 2,
  },
];
```
