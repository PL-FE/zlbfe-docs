import ElementUI from "element-ui";
import './public/rsk.config'
import {components} from './components/rsk-common'
import 'rsk-common/assets/styles/index.less'
export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
    Vue.use(ElementUI);
  }
};


