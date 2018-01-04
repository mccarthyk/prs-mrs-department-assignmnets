// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store'

import StaffTable from './components/StaffTable'
import FormStackSelect from './components/FormStackSelect'

import fetchMixin from '@/mixins/fetch'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#prs-mrs',
  store,
  mixins: [fetchMixin],
  components: { StaffTable, FormStackSelect }
})
