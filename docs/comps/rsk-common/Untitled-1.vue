<template>
  <v-add-table
    :min="0"
    :buttons="['delete', 'add']"
    :table-list.sync="tableList"
    :columns="columns"
  >
    <template slot="taxCode" slot-scope="{ data: { index } }">
      <v-select
        v-model="tableList[index].taxCode"
        :options="[]"
        :clearable="false"
        size="mini"
        :disabled="disabled"
        @change="(val) => taxpayerTypeChange(val, index)"
      ></v-select>
    </template>
  </v-add-table>
</template>

<script>
export default {
  data() {
    return {
      tableList: [],
      columns: [
        { label: "税种", key: "taxCode", width: 237 },
        { label: "奖励比例", key: "ratio" },
      ],
      options: [
        {
          label: "1",
          value: 1,
        },
        {
          label: "2",
          value: 2,
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
