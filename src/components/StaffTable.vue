<template lang="html">
  <table class="table table-striped">

    <thead>
      <tr>
        <th>Name</th>
        <th>Position/Responsibilities</th>
        <th>Contact Information</th>
      </tr>
    </thead>

    <tbody v-if="staff">
      <tr v-for="person in filteredStaff">

        <td>
          {{ person.name }}
        </td>

        <td>
          {{ person.position }}

          {{ person.departments }}

          <ul v-if="departmentsOf(person).length">
            <li v-for="dept in departmentsOf(person)">
              {{ dept.name }}
            </li>
          </ul>
        </td>

        <td>
          <ul class="list-unstyled">
            <li><a :href="`mailto:${person.email}`">Email</a></li>
            <li>
              {{ person.officephone }}
              <span v-if="showVoip">
                <!-- voip -->
                - {{ person.voip }}
              </span>
            </li>
            <li>{{ person.cellphone }}</li>
          </ul>
        </td>

      </tr>
    </tbody>

  </table>
</template>

<script>
import fetchMixin from '../mixins/fetch'

export default {
  name: 'StaffTable',
  mixins: [fetchMixin],
  props: {
    filter: {
      type: String,
      default: null
    },
    showVoip: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    filteredStaff () {
      return (this.filter) ? this.staff.filter(x => x.filter == this.filter || !x.filter) : this.staff
    }
  }
}
</script>
