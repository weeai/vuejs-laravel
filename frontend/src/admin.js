import Vue from 'vue'
import VueAsyncData from 'vue-async-data'

import App from './components/Admin/App.vue'
import Router from './components/Admin/router.js'
import './components/resources.js'

Vue.use(VueAsyncData)
Vue.config.debug = true
/* eslint-disable no-new */
var application = Vue.extend({
  components: {App},
  data () {
    return {pageTitle: null}
  },
  events: {
    onPageTitleChanged: function (title) {
      this.pageTitle = title
    }
  }
})
Router.start(application, 'html')
