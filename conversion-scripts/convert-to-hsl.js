const hexHsl = require('hex-to-hsl')

class ConvertToHsl {
  constructor(csvData) {
    this.csvData = csvData
  }

  results() {
    return this.csvData.slice(1).map(row => [row[0], hexHsl(row[1])])
  }
}

module.exports = ConvertToHsl
