import Person from '../models/person'

export default {
  state: {
    index: []
  },
  actions: {
    fetchStaff ({ commit }) {
      return fetch(Person.url).then(res => res.json()).then(data => {
        let staff = data.feed.entry.map(x => new Person(x))
        commit('setStaff', staff)
      })
    }
  },
  mutations: {
    setStaff (state, data) {
      state.index = data
    }
  },
  getters: {
    departmentsOf: (state, getters, rootState) => person => {
      return rootState.departments.index.filter(x => x.prsName === person.name || x.mrsName === person.name)
    }
  }
}
