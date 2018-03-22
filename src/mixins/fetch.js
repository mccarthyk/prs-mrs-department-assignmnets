import Person from '../models/person'
import Department from '../models/department'

export default {
  data () {
    return {
      staff: [],
      departments: []
    }
  },
  methods: {
    fetchStaff () {
      return fetch(Person.url).then(res => res.json()).then(data => {
        this.staff = data.feed.entry.map(x => new Person(x))
      })
    },
    fetchDepartments () {
      return fetch(Department.url).then(res => res.json()).then(data => {
        this.departments = data.feed.entry.map(x => new Department(x))
      })
    },
    prsOf (department) {
      return this.staff.find(x => x.name === department.prsName)
    },
    mrsOf (department) {
      return this.staff.find(x => x.name === department.mrsName)
    },
    departmentsOf (person) {
      var positionStr = (person.position === 'PRS') ? 'prsName' : 'mrsName'
      return this.departments.filter(x => x[positionStr] === person.name)
    }
  }
}
