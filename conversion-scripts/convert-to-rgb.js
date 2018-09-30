const hexRgb = require('hex-rgb')

class ConvertToRgb {
  constructor(csvData) {
    this.csvData = csvData
  }

  results() {
    return this.csvData.slice(1).map(row => [row[0], hexRgb(row[1].slice(1), { format: 'array' }).slice(0,3) ])
  }
}

module.exports = ConvertToRgb
