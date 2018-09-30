const parse = require('csv-parse')
const fs = require('fs')

class ColorSet {
  constructor(fileUrl) {
    this.fileUrl = fileUrl
  }

  load(callback) {
    fs.readFile(this.fileUrl, (err, data) => {
      parse(data, (err, csv) => {
        if (err) { throw('parse ERROR') }
        this.data = csv
        if (callback) { callback(csv) }
      })
    })
  }
}

module.exports = ColorSet
