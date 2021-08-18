<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name &amp; Responsibilities</th>
        <th>Contact Information</th>
      </tr>
    </thead>

    <tbody v-if="staff">
      <tr v-for="{ id, fields: person } in filteredStaff" :key="id">
        <td>
          <h4>
            {{ person.Name }}
            <small class="text-muted">
              <br />
              {{ person.Title }}
            </small>
          </h4>

          <ul v-if="departmentsOfStaffMember(id).length">
            <li
              v-for="{ deptId, fields: department } in departmentsOfStaffMember(
                id
              )"
              :key="deptId"
            >
              {{ department.Name }}
            </li>
          </ul>

          <em v-if="person.OOO" class="small">
            <strong>Out of Office Backup:</strong>
            {{ person.OOOBackupName }}
          </em>
        </td>

        <td>
          <div class="text-nowrap" title="Email">
            <span class="fa fa-fw fa-envelope" aria-label="Email"></span>
            <a :href="`mailto:${person.Email}`">Email</a>
          </div>
          <div v-if="showVoip" class="text-nowrap" title="VOIP Phone">
            <span
              class="fa fa-fw fa-phone-square"
              aria-label="VOIP Phone"
            ></span>
            {{ person.VOIP }}
          </div>
          <div class="text-nowrap" title="Office Phone">
            <span class="fa fa-fw fa-phone" aria-label="Office Phone"></span>
            <a :href="`tel:${person.OfficePhone}`">
              {{ person.OfficePhone }}
            </a>
          </div>
          <div class="text-nowrap" title="Cell Phone">
            <span class="fa fa-fw fa-mobile" aria-label="Cell Phone"></span>
            <a :href="`tel:${person.MobilePhone}`">
              {{ person.MobilePhone }}
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { staff, departmentsOfStaffMember } from '../lib'

export default {
  props: {
    filter: {
      type: String,
      default: null,
    },
    showVoip: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return { staff, departmentsOfStaffMember }
  },

  computed: {
    filteredStaff() {
      return this.filter
        ? staff.data.filter((x) => x.fields?.Filter == this.filter)
        : staff.data
    },
  },
}
</script>
