export default class Gsheet {
  static url (tableId = 1) {
    var sheetId = (process.env.NODE_ENV !== 'production') ? '1ReUyqMn-_xS8MsduchOdyonUyjqHgJrmeSmRYk9I08Y' : '1vditFfu7pnz0H2RJISkwEsyzyR6dErCPdea1jUu6YHk'
    return `https://spreadsheets.google.com/feeds/list/${sheetId}/${tableId}/public/values?alt=json`
  }
}
