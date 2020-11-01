'use strict'

import App from './App'
import Vue from 'vue'

// eslint-disable-next-line
const app = new Vue({
	el: '.mwe',
	render: h => h(App),
})
