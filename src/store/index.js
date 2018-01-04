import Vue from 'vue'
import Vuex from 'vuex'

import Person from './models/person'
import Department from './models/department'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staff: [],
    departments: []
  },
  actions: {
    fetchStaff ({commit}) {
      return Vue.http.get(Person.url).then(response => {
        commit('setStaff', response)
      })
    },
    fetchDepartments ({commit}) {
      return Vue.http.get(Department.url).then(response => {
        commit('setDepartments', response)
      })
    }
  },
  mutations: {
    setStaff (state, response) {
      state.staff = response.body.feed.entry.map(x => new Person(x))
    },
    setDepartments (state, response) {
      state.departments = response.body.feed.entry.map(x => new Department(x))
    }
  },
  getters: {
    departmentsOf: state => person => { // return departments of person
      var positionStr = (person.position === 'PRS') ? 'prsName' : 'mrsName'
      return state.departments.filter(x => x[positionStr] === person.name)
    },
    prsOf: state => department => {  // return prs of department
      return state.staff.find(x => x.name === department.prsName)
    },
    mrsOf: state => department => {  // return mrs of department
      return state.staff.find(x => x.name === department.mrsName)
    }
  }
})
