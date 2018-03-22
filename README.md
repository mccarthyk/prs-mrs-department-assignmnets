#  Communication's PRS & MRS Department Assignments

> A Vue.js project

## Data

The data for this project is stored in a published Google Sheet: [PRS/MRS Department Assignments](https://docs.google.com/spreadsheets/d/1vditFfu7pnz0H2RJISkwEsyzyR6dErCPdea1jUu6YHk)

## Installation

### CDN (Browser)

#### Table

```html
<div id="app">
  <table is="HcCommPrsMrsTable"></table>
</div>

<!-- include babel-polyfill for IE11 Promise support -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
<!-- include polyfill for IE11 fetch support -->
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.3/fetch.min.js"></script>
<!-- include vue -->
<script src="https://unpkg.com/vue@2.5.16/dist/vue.min.js"></script>
<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/dist/table.var.js"></script>
<script type="text/javascript">
var app = new Vue({
  el: '#app',
  components: { HcCommPrsMrsTable: HcCommPrsMrsTable }
})
</script>
```

* Optionally pass classes to the table with `<table is="StaffTable" class="table table-striped"></table>`. The `.table` & `.table-striped` classes are applied by default.

#### Dropdown Select (FormStack)

[Demo](https://hcflgov.formstack.com/forms/section_maker)

```html
<div id="app">
  <div is="HcCommPrsMrsSelect"
  department-input-id="field59760408"
  prs-email-input-id="field59760500"
  mrs-email-input-id="field59760501"
  select-class="form-control"></div>
</div>

<!-- <input id="field59760408" type="hidden"> -->
<!-- <input id="field59760500" type="hidden"> -->
<!-- <input id="field59760501" type="hidden"> -->

<!-- include babel-polyfill for IE11 Promise support -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
<!-- include polyfill for IE11 fetch support -->
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.3/fetch.min.js"></script>
<!-- include vue -->
<script src="https://unpkg.com/vue@2.5.16/dist/vue.min.js"></script>
<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/dist/select.var.js"></script>
<script type="text/javascript">
var app = new Vue({
  el: '#app',
  components: { HcCommPrsMrsSelect: HcCommPrsMrsSelect }
})
</script>
```

The following properties can be passed to the component:

* `department-input-id=""` The DOM id of the FormStack input field to which the _department name_ will be inserted.
* `prs-email-input-id=""` The DOM id of the FormStack input field to which the _PRS' email_ will be inserted.
* `mrs-email-input-id=""` The DOM id of the FormStack input field to which the _MRS' email_ will be inserted.
* `select-class=""` The class applied to the `<select>` element. Defaults to `form-control`.
* `label="Department"` The label of the select element. Defaults to `Department`.
* `:required="true"` Show or hide the `*` after the label. This property accepts a boolean data type, notice the `:` before the property which designates a [dynamic property](https://vuejs.org/v2/guide/components.html#Dynamic-Props). Defaults to `true`.

### NPM

`npm i --save https://github.com/Commbocc/prs-mrs-department-assignmnets`

Example [Single File Component](https://vuejs.org/v2/guide/single-file-components.html)

```html
<!-- App.vue -->
<template>
  <main>
    <!-- table -->
    <table is="StaffTable"></table>

    <!-- select -->
    <div is="SelectField" ...></div>
  </main>
</template>

<script>
import { StaffTable, SelectField } from 'prs-mrs-department-assignmnets'

export default {
  // ...
  components: { StaffTable, SelectField }
  // ...
}
</script>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
