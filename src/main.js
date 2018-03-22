import Vue from 'vue'

import StaffTable from './components/StaffTable'
import SelectField from './components/SelectField'

export default new Vue({
  el: '#prs-mrs',
  components: { StaffTable, FormStackSelect: SelectField }
})
