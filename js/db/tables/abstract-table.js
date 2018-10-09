const { Client } = require('pg')

class AbstractTable {
  constructor() {
    this.client = new Client()
  }

  renderQuery(values) {
    const params = values.reduce((memo, row) => {
      const [name, [r, g, b]] = row
      return [...memo, name, r, g, b]
    }, [])

    const valuePlaceholders = values.map((_, i) => {
      const initialNumber = (i * 4) + 1
      return `($${initialNumber}, $${initialNumber + 1}, $${initialNumber + 2}, $${initialNumber + 3})`
    })

    return {
      text: `
        INSERT INTO "${this.tablename}" (name, ${this.colNames}) VALUES ${valuePlaceholders.join(', ')};
      `,
      params
    }
  }

  async insertInBatches(values) {
    const batchSize = 3000

    while (values.length > 1) {
      console.log('Records remaining:', values.length)
      const batch = values.splice(0, batchSize)
      const { text, params } = this.renderQuery(batch)
      const res = await this.client.query(text, params)
      console.log(res)
    }

    return 'All done!'
  }

  async insert(values) {
    try {
      await this.client.connect()

      await this.insertInBatches(values)

      await this.client.end()
    } catch (error) {
      console.log('Error!', error)
    }
  }

  async fetchSimilar(hexCode, distance = 10) {
    await this.client.connect()
    const [x, y, z] = this.coordinates(hexCode)

    const res = await this.client.query(`
      SELECT
        name,
        ${this.colNames},
        ST_3DDistance(
          ST_GeomFromText('POINT(${x} ${y} ${z})'),
          geo
        ) as distance
      FROM ${this.geometryTable}
      WHERE ST_3DDistance(
        ST_GeomFromText('POINT(${x} ${y} ${z})'),
        geo
      ) < ${distance}
      ORDER BY distance
      LIMIT 20;
    `)

    await this.client.end()
    return res
  }
}

module.exports = AbstractTable
