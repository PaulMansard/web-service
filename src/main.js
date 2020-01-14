import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.prototype.$apiConnexion = 'http://localhost:3003'
Vue.prototype.$apiVideo = 'http://localhost:3001/video'
Vue.prototype.$apiPlaylist = 'http://localhost:3001/playlist'


Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
