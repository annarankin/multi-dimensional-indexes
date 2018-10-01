const hexHsl = require('hex-to-hsl')

const AbstractTable = require('./abstract-table')

class HslColorTable extends AbstractTable {
  constructor() {
    super()
    this.colNames = 'h, s, l'
    this.tablename = 'hsl-color-values'
  }

  async fetchSimilar(hexCode) {
    const [ h, s, l ] = hexHsl(hexCode)
    await this.client.connect()

    const res = await this.client.query(`
      SELECT
        name,
        ${this.colNames},
        ST_Distance(
          ST_GeomFromText('POINT(${h} ${s} ${l})'),
          geo
        ) as distance
      FROM hsl_geom
      WHERE ST_Distance(
        ST_GeomFromText('POINT(${h} ${s} ${l})'),
        geo
      ) < 10
      ORDER BY distance;
    `)

    await this.client.end()
    return res
  }
}

module.exports = HslColorTable
