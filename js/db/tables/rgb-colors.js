const tinyColor = require('tinycolor2')

const AbstractTable = require('./abstract-table')

class RgbColorTable extends AbstractTable {
  constructor() {
    super()
    this.colNames = 'r, g, b'
    this.tablename = 'rgb-color-values'
  }

  async fetchSimilar(hexCode) {
    const { r, g, b } = tinyColor(hexCode).toRgb()
    await this.client.connect()

    const res = await this.client.query(`
      SELECT
        name,
        ${this.colNames},
        ST_Distance(
          ST_GeomFromText('POINT(${r} ${g} ${b})'),
          geo
        ) as distance
      FROM rgb_geom
      WHERE ST_Distance(
        ST_GeomFromText('POINT(${r} ${g} ${b})'),
        geo
      ) < 10
      ORDER BY distance;
    `)

    await this.client.end()
    return res
  }
}

module.exports = RgbColorTable
