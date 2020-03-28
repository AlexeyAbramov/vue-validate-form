import Vue from 'vue'
import App from './App.vue'
import '../css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import {store} from './store/';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
