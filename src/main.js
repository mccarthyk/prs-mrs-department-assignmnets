import Vue from 'vue'
import store from './store'

import SF from './components/SelectField'
import ST from './components/StaffTable'

let SelectField = Vue.extend({
  store,
  extends: SF
})

let StaffTable = Vue.extend({
  store,
  extends: ST
})

store.dispatch('fetchAll')

export { StaffTable, SelectField }
