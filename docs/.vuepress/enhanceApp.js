import ElementUI from "element-ui";
import './public/rsk.config'
import { components } from './components/rsk-common'
import 'rsk-common/assets/styles/index.less'
import store from './store/index.js';
import https from 'rsk-common/utils/https'
import { setToken } from 'rsk-common/utils/token'

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
    });
    Vue.use(ElementUI);
    Vue.mixin({ store: store });
  }
};

