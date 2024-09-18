import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/style.scss' // 追加
import '@/assets/js/custom.js'

const app = createApp(App)

app.use(router)


app.mount('#app')
