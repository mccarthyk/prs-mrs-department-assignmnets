<template>
  <div class="">
    <label class="fsLabel fsRequiredLabel">
      {{ label }}
      <span v-if="required" class="fsRequiredMarker">*</span>
    </label>

    <select
      v-model="selectedDepartmentId"
      @change="detectSelection"
      :class="selectClass"
    >
      <option :value="null"></option>
      <option
        v-for="{ id, fields: department } in departments.data"
        :value="id"
        :key="id"
      >
        {{ department.Name }}
      </option>
    </select>
  </div>
</template>

<script>
import { departments, staffMemberOfDepartment } from '../lib'

export default {
  props: {
    label: {
      type: String,
      default: 'Department',
    },
    required: {
      type: Boolean,
      default: true,
    },
    selectClass: {
      type: String,
      default: 'form-control',
    },
    departmentInputId: {
      type: String,
    },
    prsEmailInputId: {
      type: String,
    },
    mrsEmailInputId: {
      type: String,
    },
  },

  setup() {
    return { departments }
  },

  data: () => ({
    selectedDepartmentId: null,
  }),

  computed: {
    selectedDepartment() {
      return departments.data.find((x) => x.id == this.selectedDepartmentId)
    },
    selectedDepartmentPRS() {
      const staffId = this.selectedDepartment?.fields?.PRS[0]
      return this.selectedDepartment?.fields?.PRS[0]
    },
    selectedDepartmentMRS() {
      return departments.data.find((x) => x.id == this.selectedDepartmentId)
    },
  },

  methods: {
    detectSelection(e) {
      if (this.departmentInputId) {
        document.getElementById(this.departmentInputId).value =
          this.selectedDepartment?.fields?.Name || null
      }
      if (this.prsEmailInputId) {
        document.getElementById(this.prsEmailInputId).value =
          staffMemberOfDepartment(
            this.selectedDepartmentId,
            'PRS'
          )?.fields.Email
      }
      if (this.mrsEmailInputId) {
        document.getElementById(this.mrsEmailInputId).value =
          staffMemberOfDepartment(this.selectedDepartmentId, 'MRS').fields.Email
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
