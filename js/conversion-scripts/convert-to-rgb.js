const tinyColor = require('tinycolor2')

class ConvertToRgb {
  constructor(csvData) {
    this.csvData = csvData
  }

  results() {
    return this.csvData.slice(1).map(row => {
      const name = row[0]
      const hex = row[1]
      const { r, g, b } = tinyColor(hex).toRgb()
      return [
        name,
        [ r, g, b ],
      ]
    })
  }
}

module.exports = ConvertToRgb
