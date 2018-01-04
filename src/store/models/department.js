export default class Department {
  constructor (obj) {
    this.name = obj.gsx$department.$t
    this.prsName = obj.gsx$prs.$t
    this.mrsName = obj.gsx$mrs.$t
  }

  static get url () {
    return 'https://spreadsheets.google.com/feeds/list/1vditFfu7pnz0H2RJISkwEsyzyR6dErCPdea1jUu6YHk/2/public/values?alt=json'
  }
}
