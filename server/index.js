require('dotenv').load()
const express = require('express')
const tinyColor = require('tinycolor2')

const app = express()
const port = 3000

app.set('view engine', 'html')

const RgbColorTable = require('../js/db/tables/rgb-colors')

app.use(express.static(__dirname + '/public'))

app.get('/search/:hexNumber', async (req, res) => {
  const { hexNumber } = req.params
  const { distance } = req.query
  console.log(distance)
  const rgbTable = new RgbColorTable()
  const rgbData = await rgbTable.fetchSimilar(hexNumber, distance)
  res.json(rgbData.rows.map(row => ({ ...row, hex: tinyColor({ r: row.r, g: row.g, b: row.b }).toHexString() })))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
