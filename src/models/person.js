import Gsheet from './gsheet'

export default class Person extends Gsheet {
  constructor (obj) {
    super()
    this.name = obj.gsx$fullname.$t
    this.position = obj.gsx$position.$t
    this.filter = obj.gsx$filter.$t
    this.email = obj.gsx$email.$t
    this.officephone = obj.gsx$officephone.$t
    this.voip = obj.gsx$voip.$t
    this.cellphone = obj.gsx$cellphone.$t
  }
}
