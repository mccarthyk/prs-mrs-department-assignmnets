#  Communication's PRS & MRS Department Assignments

> A Vue.js project

## Data

The data for this project is stored in a published Google Sheet: [PRS/MRS Department Assignments](https://docs.google.com/spreadsheets/d/1vditFfu7pnz0H2RJISkwEsyzyR6dErCPdea1jUu6YHk)

## Basic Usage

### Table

```html
<div id="prs-mrs">
  <table is="StaffTable"></table>
</div>

<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/static/js/manifest.js"></script>
<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/static/js/vendor.js"></script>
<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/static/js/app.js"></script>
```

* Optionally pass classes to the table with `<table is="StaffTable" class="table table-striped"></table>`. The `.table` & `.table-striped` classes are applied by default.

### FormStack Dropdown Select

[Demo](https://hcflgov.formstack.com/forms/section_maker)

```html
<div id="prs-mrs">
  <div is="FormStackSelect"
  department-input-id="field59760408"
  prs-email-input-id="field59760500"
  mrs-email-input-id="field59760501"></div>
</div>

<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/static/js/manifest.js"></script>
<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/static/js/vendor.js"></script>
<script src="https://commbocc.github.io/prs-mrs-department-assignmnets/static/js/app.js"></script>
```

The following properties can be passed to the component:

* `department-input-id=""` The DOM id of the FormStack input field to which the _department name_ will be inserted.
* `prs-email-input-id=""` The DOM id of the FormStack input field to which the _PRS' email_ will be inserted.
* `mrs-email-input-id=""` The DOM id of the FormStack input field to which the _MRS' email_ will be inserted.
* `label="Department"` The label of the select element. Defaults to `Department`.
* `:required="true"` Show or hide the `*` after the label. This property accepts a boolean data type, notice the `:` before the property which designates a [dynamic property](https://vuejs.org/v2/guide/components.html#Dynamic-Props). Defaults to `true`.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
