import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/axios'
import './plugins/vant.js'
import 'amfe-flexible/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
