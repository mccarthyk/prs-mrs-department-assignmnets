<template lang="html">
  <table class="table table-striped">

    <thead>
      <tr>
        <th>
          Name &amp; Responsibilities
        </th>
        <th>Contact Information</th>
      </tr>
    </thead>

    <tbody v-if="staff">
      <tr v-for="person in filteredStaff">

        <td>
          <h4>
            {{ person.name }}
            <small class="text-muted">
              <br>
              {{ person.position }}
            </small>
          </h4>

          <ul v-if="person.departments.length">
            <li v-for="dept in person.departments">
              {{ dept.name }}
            </li>
          </ul>
        </td>

        <td>
          <div class="text-nowrap" title="Email">
            <span class="fa fa-fw fa-envelope" aria-label="Email"></span>
            <a :href="`mailto:${person.email}`">Email</a>
          </div>
          <div v-if="showVoip" class="text-nowrap" title="VOIP Phone">
            <span class="fa fa-fw fa-phone-square" aria-label="VOIP Phone"></span>
            {{ person.voip }}
          </div>
          <div class="text-nowrap" title="Office Phone">
            <span class="fa fa-fw fa-phone" aria-label="Office Phone"></span>
            <a :href="`tel:${person.officephone}`">
              {{ person.officephone }}
            </a>
          </div>
          <div class="text-nowrap" title="Cell Phone">
            <span class="fa fa-fw fa-mobile" aria-label="Cell Phone"></span>
            <a :href="`tel:${person.cellphone}`">
              {{ person.cellphone }}
            </a>
          </div>
        </td>

      </tr>
    </tbody>

  </table>
</template>

<script>
import { storeMixin } from '../store'

export default {
  name: 'StaffTable',
  mixins: [storeMixin],
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
      return (this.filter) ? this.staff.filter(x => x.filter == this.filter) : this.staff
    }
  }
}
</script>
