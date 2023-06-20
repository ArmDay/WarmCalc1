import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'


// Import the functions you need from the SDKs you need





Vue.use(messagePlugin)
Vue.config.productionTip = false
Vue.use(Vuelidate)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
