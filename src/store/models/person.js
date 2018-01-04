export default class Person {
  constructor (obj) {
    this.name = obj.gsx$fullname.$t
    this.position = obj.gsx$position.$t
    this.note = obj.gsx$note.$t
    this.email = obj.gsx$email.$t
    this.officephone = obj.gsx$officephone.$t
    this.voip = obj.gsx$voip.$t
    this.cellphone = obj.gsx$cellphone.$t
  }

  static get url () {
    return 'https://spreadsheets.google.com/feeds/list/1vditFfu7pnz0H2RJISkwEsyzyR6dErCPdea1jUu6YHk/1/public/values?alt=json'
  }
}
