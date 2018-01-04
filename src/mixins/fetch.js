import { mapActions } from 'vuex'

export default {
  methods: mapActions([
    'fetchStaff',
    'fetchDepartments'
  ]),
  mounted () {
    this.fetchStaff()
    this.fetchDepartments()
  }
}
