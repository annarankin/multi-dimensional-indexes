const tinyColor = require('tinycolor2')

const AbstractTable = require('./abstract-table')

class RgbColorTable extends AbstractTable {
  constructor() {
    super()
    this.colNames = 'r, g, b'
    this.tablename = 'rgb_colors'
    this.geometryTable = 'rgb_geom'
  }

  coordinates(hexCode) {
    const { r, g, b } = tinyColor(hexCode).toRgb()
    return [ r, b, g ] // WHY
  }
}

module.exports = RgbColorTable
