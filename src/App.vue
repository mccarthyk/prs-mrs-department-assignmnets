<template>
  <div id="app">

    <section class="py-5" name="">
      <div class="container">

        <h2>Select Department Form Field Demo</h2>

        <!-- SelectField -->
        <div is="SelectField"
        department-input-id="field59760408"
        prs-email-input-id="field59760500"
        mrs-email-input-id="field59760501"
        select-class="form-control"></div>

        <!-- FormStack Fields -->
        <div class="bg-dark text-light p-3 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <input id="field59760408" class="mt-3 form-control form-control-sm" disabled>
          <input id="field59760500" class="mt-3 form-control form-control-sm" disabled>
          <input id="field59760501" class="mt-3 form-control form-control-sm" disabled>
        </div>

      </div>
    </section>

    <hr>

    <section class="py-5" name="">
      <div class="container">

        <h2>Table Demo</h2>

        <!-- StaffTable -->
        <table is="StaffTable"></table>

      </div>
    </section>

  </div>
</template>

<script>
import StaffTable from './components/StaffTable'
import SelectField from './components/SelectField'

export default {
  name: 'app',
  components: {
    StaffTable,
    SelectField
  }
}
</script>
