import Gsheet from './gsheet'

export default class Department extends Gsheet {
  constructor (obj) {
    super()
    this.name = obj.gsx$department.$t
    this.prsName = obj.gsx$prs.$t
    this.mrsName = obj.gsx$mrs.$t
  }
}
