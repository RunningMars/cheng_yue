import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui'
import '../public/stylesheets/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css'


import  Viewer  from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(ElementUI)
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VueRouter)

new Vue({
  el:"#app",
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  store,
  router:router
})

    // .$mount('#app')
