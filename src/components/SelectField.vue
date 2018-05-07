<template lang="html">
  <div class="">

    <label class="fsLabel fsRequiredLabel">
      Department
      <span v-if="required" class="fsRequiredMarker">*</span>
    </label>

    <select v-model="selected" @change="detectSelection" :class="selectClass">
      <option :value="null"></option>
      <option v-for="dept in departments" :value="dept">{{ dept.name }}</option>
    </select>

  </div>
</template>

<script>
import fetchMixin from '../mixins/fetch'

export default {
  name: 'SelectField',
  data () {
    return {
      selected: null
    }
  },
  mixins: [fetchMixin],
  methods: {
    detectSelection (e) {
      var department = (this.selected) ? this.selected : null
      var prs = (this.selected) ? this.prsOf(this.selected) : null
      var mrs = (this.selected) ? this.mrsOf(this.selected) : null
      if (this.departmentInputId) {
        document.getElementById(this.departmentInputId).value = (department) ? department.name : null
      }
      if (this.prsEmailInputId) {
        document.getElementById(this.prsEmailInputId).value = (prs) ? prs.email : null
      }
      if (this.mrsEmailInputId) {
        document.getElementById(this.mrsEmailInputId).value = (mrs) ? mrs.email : null
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
