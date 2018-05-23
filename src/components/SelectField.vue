<template lang="html">
  <div class="">

    <label class="fsLabel fsRequiredLabel">
      Department
      <span v-if="required" class="fsRequiredMarker">*</span>
    </label>

    <select v-model="selectedDept" @change="detectSelection" :class="selectClass">
      <option :value="null"></option>
      <option v-for="dept in departments" :value="dept">{{ dept.name }}</option>
    </select>

  </div>
</template>

<script>
import { storeMixin } from '../store'

export default {
  name: 'SelectField',
  mixins: [storeMixin],
  data () {
    return {
      selectedDept: null
    }
  },
  methods: {
    detectSelection (e) {
      let department = (this.selectedDept) ? this.selectedDept : null
      if (this.departmentInputId) {
        document.getElementById(this.departmentInputId).value = (department) ? department.name : null
      }
      if (this.prsEmailInputId) {
        document.getElementById(this.prsEmailInputId).value = (department && department.prs) ? department.prs.email : null
      }
      if (this.mrsEmailInputId) {
        document.getElementById(this.mrsEmailInputId).value = (department && department.mrs) ? department.mrs.email : null
      }
    }
  },
  props: {
    label: {
      type: String,
      default: 'Department'
    },
    required: {
      type: Boolean,
      default: true
    },
    selectClass: {
      type: String,
      default: 'form-control'
    },
    departmentInputId: {
      type: String
    },
    prsEmailInputId: {
      type: String
    },
    mrsEmailInputId: {
      type: String
    }
  }
}
</script>
