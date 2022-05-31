import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store';

//Install
// npm install materialize-css@next --save
// npm install material-design-icons --save
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
