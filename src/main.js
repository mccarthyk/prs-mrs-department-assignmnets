import { createApp } from 'vue'
import { fetchAll } from './lib'

import SelectFieldComponent from './components/SelectField.vue'
import StaffTableComponent from './components/StaffTable.vue'

fetchAll()

export const SelectField = (props = {}) =>
  createApp(SelectFieldComponent, props)

export const StaffTable = (props = {}) => createApp(StaffTableComponent, props)

if (import.meta.env.DEV) {
  //
  SelectField({
    departmentInputId: 'field59760408',
    prsEmailInputId: 'field59760500',
    mrsEmailInputId: 'field59760501',
  }).mount('#SelectField')

  //
  StaffTable({
    // showVoip: true,
    // filter: 'MRS', // 'PRS', 'MRS', or 'Manager'
  }).mount('#StaffTable')
}
