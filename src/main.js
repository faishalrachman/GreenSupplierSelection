
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueSession from 'vue-session'
import VueSwal from 'vue-swal'

Vue.use(VueSwal)
Vue.use(VueRouter);
Vue.use(VueSession)

Vue.prototype.$window = window
Vue.config.productionTip = false

// Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')


