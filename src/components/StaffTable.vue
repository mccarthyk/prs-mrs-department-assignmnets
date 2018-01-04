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
      <tr v-for="person in staff">

        <td>
          {{ person.name }}
        </td>

        <td>
          {{ person.note }} {{ person.position }}

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
            <li>{{ person.officephone }} - {{ person.voip }}</li>
            <li>{{ person.cellphone }}</li>
          </ul>
        </td>

      </tr>
    </tbody>

  </table>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'StaffTable',
  computed: {
    ...mapState({
      staff: state => state.staff
    }),
    ...mapGetters(['departmentsOf'])
  }
}
</script>
