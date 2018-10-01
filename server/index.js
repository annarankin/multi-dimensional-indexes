require('dotenv').load()
const express = require('express')
const tinyColor = require('tinycolor2')

const app = express()
const port = 3000

app.set('view engine', 'html')

const HslColorTable = require('../js/db/tables/hsl-colors')
const RgbColorTable = require('../js/db/tables/rgb-colors')

app.use(express.static(__dirname + '/public'))

app.get('/search/:hexNumber', async (req, res) => {
  const { hexNumber } = req.params
  const hslTable = new HslColorTable()
  // const rgbTable = new RgbColorTable()
  // const rgbData = await rgbTable.fetchSimilar(`#${hexNumber}`)
  const hslData = await hslTable.fetchSimilar(`#${hexNumber}`)
  res.json(hslData.rows.map(row => ({ ...row, hex: tinyColor({ h: row.h, s: row.s, l: row.l }).toHexString() })))
  // res.json(rgbData.rows.map(row => ({ ...row, hex: tinyColor({ r: row.r, g: row.g, b: row.b }).toHexString() })))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
