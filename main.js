import Vue from 'vue'
import App from './App'

import uView from 'uview-ui'
Vue.use(uView)
// 全局混入
import Mixin from '@/utils/mixin.js';
Vue.use(Mixin);

Vue.config.productionTip = false
App.mpType = 'app'

import mpShare from 'uview-ui/libs/mixin/mpShare.js'
import { baseURL } from './utils/request'
Vue.prototype.baseURL = baseURL

Vue.mixin(mpShare)

const app = new Vue({
	...App
})
app.$mount()