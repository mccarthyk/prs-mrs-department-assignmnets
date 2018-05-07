#  Communication's PRS & MRS Department Assignments

> A Vue.js project

## Data

The data for this project is stored in a published Google Sheet: [PRS/MRS Department Assignments](https://docs.google.com/spreadsheets/d/1vditFfu7pnz0H2RJISkwEsyzyR6dErCPdea1jUu6YHk)

## Installation

### CDN (Browser)

```html
<!-- include babel-polyfill for IE11 Promise support -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js"></script>
<!-- include polyfill for IE11 fetch support -->
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.3/fetch.min.js"></script>
<!-- include vue -->
<script src="https://unpkg.com/vue@2.5.16/dist/vue.min.js"></script>
<!-- sets HcPrsMrsDepts as a variable -->
<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/dist/build.js"></script>
```

#### Table

```html
<div id="StaffTable"></div>

<script type="text/javascript">
var StaffTable = Vue.extend(HcPrsMrsDepts.StaffTable)
var staffTable = new StaffTable({propsData: {
  showVoip: false,
  filter: null // 'PRS' or 'MRS'
}}).$mount('#StaffTable')
</script>
```

#### Dropdown Select (FormStack)

```html
<div id="SelectField"></div>
<!-- <input id="field59760408" type="hidden"> -->
<!-- <input id="field59760500" type="hidden"> -->
<!-- <input id="field59760501" type="hidden"> -->

<script type="text/javascript">
var SelectField = Vue.extend(HcPrsMrsDepts.SelectField)
var selectField = new SelectField({propsData: {
  departmentInputId: 'field59760408',
  prsEmailInputId: 'field59760500',
  mrsEmailInputId: 'field59760501'
}}).$mount('#SelectField')
</script>
```

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
