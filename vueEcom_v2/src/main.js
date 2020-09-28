import Vue from 'vue'
import App from './App.vue'
import router from './router'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// optional
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// for vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import {storage} from '@/store/index'
const store = new Vuex.Store(storage)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
