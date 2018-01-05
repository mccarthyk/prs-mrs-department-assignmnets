<template lang="html">
  <div v-if="staff.length" class="row">
    <div v-for="person in staff" class="col-md-6 col-lg-4">
      <div class="card mb-3">

        <div class="card-body">
          <h3 class="font-weight-bold mt-0"><a :href="'mailto:' + person.email">{{ person.name }}</a><br><small>{{ person.note }} {{ person.position }}</small></h3>

          <ul class="list-unstyled mb-3">
            <li>{{ person.officephone }} - {{ person.voip }}</li>
            <li>{{ person.cellphone }}</li>
          </ul>
        </div>

        <div v-if="departmentsOf(person).length" class="card-body pt-0">
          <h4 class="h6 font-weight-bold">Departments</h4>

          <ul class="mb-0">
            <li v-for="dept in departmentsOf(person)">
              {{ dept.name }}
            </li>
          </ul>
        </div>

        <div class="card-body pt-0 small">
          Out of Office Backup: {{ person.oooBackup }}
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'StaffCards',
  computed: {
    ...mapState({
      staff: state => state.staff
    }),
    ...mapGetters(['departmentsOf'])
  }
}
</script>
