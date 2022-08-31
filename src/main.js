import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import TypeNav from '@/components/TypeNav/typeNavIndex.vue'
import PagiNation from "@/components/PagiNation/PagiNation.vue";
Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);
Vue.component(PagiNation.name, PagiNation);
import * as API from '@/api'
new Vue({
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount("#app");
