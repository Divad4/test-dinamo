import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import VueCarousel from 'vue-carousel'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'es6-promise/auto'
import '@/styles/scss/_templates.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
