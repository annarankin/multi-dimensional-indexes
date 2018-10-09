const tinyColor = require('tinycolor2')

const AbstractTable = require('./abstract-table')

class HsvColorTable extends AbstractTable {
  constructor() {
    super()
    this.colNames = 'h, s, v'
    this.tablename = 'hsv-color-values'
    this.geometryTable = 'hsv_geom'
  }

  coordinates(hexCode) {
    const { h, s, v } = tinyColor(hexCode).toHsv()
    return [ h, s, v ]
  }
}

module.exports = HsvColorTable
