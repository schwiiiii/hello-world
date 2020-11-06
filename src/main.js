import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from "vue-tailwind";
import VueCodeHighlight from "vue-code-highlight";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faQuestion,
  faAngleUp,
  faAngleLeft,
  faImages
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faQuestion, faAngleUp, faAngleLeft, faImages);

import "@/assets/css/tailwind.css";
import "./../node_modules/vue-code-highlight/themes/prism-tomorrow.css";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueTailwind);
Vue.use(VueCodeHighlight);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
