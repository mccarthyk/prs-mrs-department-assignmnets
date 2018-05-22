import Vue from 'vue'
import Vuex, { mapState } from 'vuex'

import staff from './modules/staff'
import departments from './modules/departments'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    staff,
    departments
  },
  actions: {
    fetchAll ({ dispatch }) {
      dispatch('fetchStaff')
      dispatch('fetchDepartments')
    }
  }
})

export const storeMixin = {
  computed: mapState({
    staff: state => state.staff.index,
    departments: state => state.departments.index
  })
}
