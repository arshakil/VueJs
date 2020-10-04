import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// Globally register chart# https://yasminzy.com/vue/chart.html#steps
import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

// Globally register bootstrap-vue components# npm install bootstrap jquery popper.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Chartkick  # https://chartkick.com/vue#installation
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))

new Vue({
  render: h => h(App),
}).$mount('#app')
