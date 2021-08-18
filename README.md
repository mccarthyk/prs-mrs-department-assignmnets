# Hillsborough County Communication's PRS & MRS Department Assignments

> A Vue.js project

## Data

The data for this project is stored in an [Airtable Base](https://airtable.com/tbloCMQn28QJWMWWW/viwbuX67x64Du0now?blocks=hide)

## Installation

```html
<!-- exposes HcPrsMrsAssignments as a window object -->
<script src="./hc-vite-template.umd.js"></script>
```

## Basic Use

### Table

```html
<div id="StaffTable"></div>

<script type="text/javascript">
  HcPrsMrsAssignments.StaffTable({
    // showVoip: true,
    // filter: 'MRS', // 'PRS', 'MRS', or 'Manager'
  }).mount('#StaffTable')
</script>
```

### Dropdown Select (FormStack)

```html
<div id="SelectField"></div>
<!-- <input id="field59760408" type="hidden"> -->
<!-- <input id="field59760500" type="hidden"> -->
<!-- <input id="field59760501" type="hidden"> -->

<script type="text/javascript">
  HcPrsMrsAssignments.SelectField({
    departmentInputId: 'field59760408',
    prsEmailInputId: 'field59760500',
    mrsEmailInputId: 'field59760501',
  }).mount('#SelectField')
</script>
```

## Build Setup

```bash
# install dependencies
yarn

# serve with hot reload
yarn dev

# build for production
yarn build
```
