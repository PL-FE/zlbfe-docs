import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './public/rsk.config'
import {components} from './components/rsk-common'
import 'rsk-common/assets/styles/index.less';
import 'https://static.zlbzb.cn/common/assets/font_1574595_31u8s07swss/iconfont.css'
import 'https://static.zlbzb.cn/common/assets/font_1574595_31u8s07swss/iconfont.js'
export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
    Vue.use(ElementUI);
  }
};


