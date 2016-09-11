var db = require ('./data/db')
var fs = require('fs')
var path = require('path')

module.exports = {
  getIndex: getIndex
}

var wordsFile = path.join(__dirname, 'words.json')

function getIndex(req, res) {
  db.getWords(function (err, words) {
    var vm = {
      words: words
    }
    re.render('home', vm)
  })
}
