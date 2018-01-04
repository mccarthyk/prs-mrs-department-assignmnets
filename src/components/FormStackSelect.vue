<template lang="html">
  <div class="">

    <label class="fsLabel fsRequiredLabel">
      Department
      <span v-if="required" class="fsRequiredMarker">*</span>
    </label>

    <select v-model="selected"  @change="detectSelection">
      <option :value="null"></option>
      <option v-for="dept in departments" :value="dept">{{ dept.name }}</option>
    </select>
    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FormStackSelect',
  props: {
    label: {
      type: String,
      default: 'Department'
    },
    required: {
      type: Boolean,
      default: true
    },
    departmentInputId: String,
    prsEmailInputId: String,
    mrsEmailInputId: String
  },
  data () {
    return {
      selected: null
    }
  },
  methods: {
    detectSelection (e) {
      if (this.departmentInputId) document.getElementById(this.departmentInputId).value = (this.selected) ? this.selected.name : null
      if (this.prsEmailInputId) document.getElementById(this.prsEmailInputId).value = (this.selected) ? this.prsOf(this.selected).email : null
      if (this.mrsEmailInputId) document.getElementById(this.mrsEmailInputId).value = (this.selected) ? this.mrsOf(this.selected).email : null
    }
  },
  computed: {
    ...mapState({
      departments: state => state.departments
    }),
    ...mapGetters([
      'prsOf',
      'mrsOf'
    ])
  }
}
</script>
