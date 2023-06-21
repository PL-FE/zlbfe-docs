## VIcon

全局字体图标组件的封装

- 支持单色/彩色：renderSvg

### 基本使用

:::demo

```html
<div>
  <v-icon icon="edit" size="30"></v-icon>
  <v-icon icon="Pdf" size="30"></v-icon>
  <v-icon icon="copy_o" size="30" />
  <v-icon icon="icon-prompt" size="30"></v-icon>
</div>

<div>
  <v-icon renderSvg icon="edit" width="30" height="30"></v-icon>
  <v-icon icon="Pdf" renderSvg width="30" height="30"></v-icon>
  <v-icon renderSvg icon="copy_o" width="30" height="30"></v-icon>
  <v-icon renderSvg icon="icon-prompt" width="30" height="30"></v-icon>
</div>
```

:::

### 图标集合

:::demo

```html
<div>
  <div class="icon-list">
    <li v-for="name in options" :key="name" @click="copyToClipboard(name)">
      <span>
        <v-icon renderSvg :icon="name" width="30" height="30"></v-icon>
        <span class="icon-name">{{name}}</span>
      </span>
    </li>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        options: require("@/utils/IconFontList").default,
      };
    },
    mounted() {},
    methods: {
      copyToClipboard(text) {
        // 创建一个临时的 textarea 元素
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);

        // 选中 textarea 中的内容
        textarea.select();

        // 执行复制命令
        document.execCommand("copy");

        // 删除临时元素
        document.body.removeChild(textarea);

        this.$message.success("复制成功：[" + text + "]");
      },
    },
  };
</script>

<style>
  .icon-list {
    display: flex;
    flex-wrap: wrap;
  }
  .icon-list li {
    border: 1px solid #eee;
    flex-basis: 25%;
    overflow: hidden;
    height: 120px;
    cursor: pointer;
  }

  .icon-list li > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25%;
  }
  .icon-list li > span > span {
    text-align: center;
    color: #99a9bf;
    line-height: normal;
    height: 0;
  }
  .icon-list li:hover > span > span {
    color: #0af;
  }
</style>
```

:::

## 属性

| 参数         | 说明                                            | 类型           | 可选值 | 默认值 |
| ------------ | ----------------------------------------------- | -------------- | ------ | ------ |
| icon         | 图标名                                          | String         | —      | -      |
| renderSvg    | 是否启用 svg 渲染：主要解决多色问题             | Boolean        | —      | false  |
| color        | 颜色：对于单色起作用                            | String         | —      | -      |
| size         | 大小：renderSvg 为 false 起作用，表示字体大小   | Number, String | —      | -      |
| width/height | 大小：renderSvg 为 true 起作用，为 svg 限定尺寸 | Number, String | —      | -      |
