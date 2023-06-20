## AddTable

表格中新增添加行的场景使用

### 基础用法

:::demo max=5,min=2，限制为最大 5 条数据和最小 2 条

```html
<template>
  <v-add-table
    :table-list.sync="tableList"
    :columns="columns"
    :max="5"
    :min="2"
  >
    <template slot="taxCode" slot-scope="{ data: { index } }">
      <v-select
        placeholder="请选择税种"
        v-model="tableList[index].taxCode"
        size="mini"
        :options="options"
      />
    </template>
    <template slot="ratio" slot-scope="{ data: { index } }">
      <el-input v-model="tableList[index].ratio" size="mini">
        <template slot="suffix">%</template>
      </el-input>
    </template>
  </v-add-table>
</template>

<script>
  export default {
    data() {
      return {
        tableList: [
          {
            taxCode: "",
            ratio: "",
          },
        ],
        columns: [
          { label: "税种", key: "taxCode" },
          { label: "奖励比例", key: "ratio" },
        ],
        options: [
          { value: "1", label: "增值税" },
          { value: "2", label: "企业所得税" },
          { value: "3", label: "个人所得税" },
          { value: "4", label: "印花税" },
        ],
      };
    },
  };
</script>
```

:::

### 隐藏按钮

:::demo isView 为 true 时，新增按钮和操作列按钮隐藏

```html
<template>
  <v-add-table :table-list.sync="tableList" :columns="columns" isView>
    <template slot="taxCode" slot-scope="{ data: { index } }">
      <v-select
        placeholder="请选择税种"
        v-model="tableList[index].taxCode"
        size="mini"
        :options="options"
      />
    </template>
    <template slot="ratio" slot-scope="{ data: { index } }">
      <el-input v-model="tableList[index].ratio" size="mini">
        <template slot="suffix">%</template>
      </el-input>
    </template>
  </v-add-table>
</template>

<script>
  export default {
    data() {
      return {
        tableList: [
          {
            taxCode: "",
            ratio: "",
          },
          {
            taxCode: "",
            ratio: "",
          },
        ],
        columns: [
          { label: "税种", key: "taxCode" },
          { label: "奖励比例", key: "ratio" },
        ],
        options: [
          { value: "1", label: "增值税" },
          { value: "2", label: "企业所得税" },
          { value: "3", label: "个人所得税" },
          { value: "4", label: "印花税" },
        ],
      };
    },
  };
</script>
```

:::

## 属性

| 参数           | 说明                                                                                    | 类型     | 可选值               | 默认值                     |
| -------------- | --------------------------------------------------------------------------------------- | -------- | -------------------- | -------------------------- |
| rowTemplate    | 行模板，如果没有，则自动从 columns 中提取                                               | Object   | —                    | object                     |
| columns        | 表列                                                                                    | Array    | —                    | []                         |
| tableList      | 表格数据，如果为空，则会自动使用`rowTemplate`生成[{...rowTemplate}]，支持.sync 双向绑定 | Array    | —                    | []                         |
| spanMethod     | 处理表格合并                                                                            | Function | —                    | -                          |
| addType        | 添加的方式                                                                              | String   | start\end            | end                        |
| buttons        | 需要显示的 button                                                                       | Array    | [add/clear/delete]   | ["add", "clear", "delete"] |
| buttonsProps   | 传递给 el-button 的 props                                                               | Object   | 参考 el-button props | {}                         |
| isView         | 是否只是查看                                                                            | Boolean  | true/false           | {}                         |
| max            | 最大允许条数                                                                            | Number   | -                    |                            |
| min            | 最小允许条数                                                                            | Number   | -                    | 1                          |
| toastType      | 通知类型                                                                                | String   | 'event'              | 默认 message 提示          |
| maxErrorMsg    | 达到最大时的文本                                                                        | String   | -                    | ''                         |
| addBtnPosition | `添加` 按钮的位置                                                                       | String   | -                    | 'right'                    |

## 事件

| 事件名称         | 说明                                | 回调参数      |
| ---------------- | ----------------------------------- | ------------- |
| addMaxCallback   | toastType 为 `event` 时，触发的回调 | max 的值      |
| clearRow         | 点击清空按钮，触发的回调            | index         |
| delete-item      | 删除行的时候，触发的回调            | 行数据 item   |
| update:tableList | 表格数据变更时，触发的回调          | 表格数据 list |
