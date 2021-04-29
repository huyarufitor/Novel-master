// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import {router} from './router/index.js'
import store from './store'

import 'lib-flexible'
import 'static/css/reset.css'
import 'font-awesome/css/font-awesome.css'

Vue.prototype.$http = axios
// 15  axios是什么？有什么用？
//  20.请说出vue.cli项目中src目录每个文件夹和文件的用法

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
