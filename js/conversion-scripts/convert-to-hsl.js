const hexHsl = require('hex-to-hsl')

class ConvertToHsl {
  constructor(data) {
    this.data = data
  }

  results() {
    return this.data.slice(1).map(row => [row[0], hexHsl(row[1])])
  }
}

module.exports = ConvertToHsl
