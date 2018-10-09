(async () => {
  require('dotenv').load()

  const ColorSet = require('../conversion-scripts/color-set')
  const RgbColorTable = require('./tables/rgb-colors')
  // const HslColorTable = require('./tables/hsl-colors')

  const ConvertToRgb = require('../conversion-scripts/convert-to-rgb')
  // const ConvertToHsl = require('../conversion-scripts/convert-to-hsl')

  const FILE_URL = 'color-data/meodai-colors.csv'
  const colors = new ColorSet(FILE_URL)

  colors.load(async(data) => {
    var rgbData = new ConvertToRgb(data).results()
    console.log(await new RgbColorTable().insert(rgbData))
    // var hslData = new ConvertToHsl(data).results()
    // console.log(await new HslColorTable().insert(hslData))
  })
})()




