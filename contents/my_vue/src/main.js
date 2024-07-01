import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

// デフォルトの画像を設定
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'path/to/error.png',
  loading: 'path/to/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
