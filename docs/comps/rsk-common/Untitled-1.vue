<template>
  <v-add-table :table-list.sync="tableList"
    :columns="columns">
    <template slot="taxCode"
      slot-scope="{ data: { index } }">
      <v-select placeholder="请选择税种"
        v-model="form.rewards[index].taxCode"
        size="mini"
        options="options" />
    </template>
  </v-add-table>
</template>

<script>
export default {
  data () {
    return {
      form: {
        rewards: []
      },
      tableList: [],
      columns: [
        { label: "税种", key: "taxCode" },
        { label: "奖励比例", key: "ratio" },
      ],
      options: [
        { value: "1", label: "南部大区" },
        { value: "2", label: "其他" },
      ],
    };
  },
  mounted () { },
  methods: {},
};
</script>
