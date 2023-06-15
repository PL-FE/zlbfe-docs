import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './public/rsk.config'
import {components} from './components/rsk-common'

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
    Vue.use(ElementUI);
  }
};


