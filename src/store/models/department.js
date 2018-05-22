import store from '../'
import Gsheet from './gsheet'

export default class Department {
  constructor (obj) {
    this.name = obj.gsx$department.$t
    this.prsName = obj.gsx$prs.$t
    this.mrsName = obj.gsx$mrs.$t
  }

  get prs () {
    return store.getters.prsOf(this)
  }

  get mrs () {
    return store.getters.mrsOf(this)
  }

  static get url () {
    return Gsheet.url(2)
  }
}
