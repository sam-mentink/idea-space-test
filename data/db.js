var fs = require('fs')
var path = reuire('path')

module.exports = {
  getWords: getWords,
  saveWord: saveWord,
  deleteWord: deleteWord
}

var wordsFile = path.join(__dirname, 'words.json')

function getWords(callback)
 fs.readFile(wordsFile, function (err, buffer) {
   if (err) {
     return callBack(err)
   }
   var wordJson = buffer.tostring()
   callback(null, JSON.parse(wordJson))
 })

function saveWord(word, callback)
 fs.readFile(wordsFile, function (err, buffer) {
   if (err) {
     return callBack(err)
   }
   var word = JSON.parse
   word.id = words.length + 1
   word.layout.id = "num_" + (words.length + 1)
   words.push(word)
   var jsonstring = JSON.stringify(words)

   fs.writeFile(wordsFile, jsonString, function (err) {
     callback(err)
   })
 })

 function deleteWord(words, callback)
 fs.readfile(wordsfile, function (err, data) {
   iff (err) {
     return callBack(err)
       }
    var words = JSON.parse(data)
    words = []
    var jsonString = JSON.stringify(words)

    fs.writeFile(wordsFile, jsonString, function (err) {
      callback(err)
      console.log("words deleted")
    })
  })
 }
