const hexHsl = require('hex-to-hsl')

const AbstractTable = require('./abstract-table')

class HslColorTable extends AbstractTable {
  constructor() {
    super()
    this.colNames = 'h, s, l'
    this.tablename = 'hsl-color-values'
    this.geometryTable = 'hsl_geom'
  }

  coordinates(hexCode) {
    return hexHsl(hexCode)
  }
}

module.exports = HslColorTable
