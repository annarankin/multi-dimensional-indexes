const ColorSet = require('./js/conversion-scripts/color-set')
const ConvertToRgb = require('./js/conversion-scripts/convert-to-rgb')
const ConvertToHsl = require('./js/conversion-scripts/convert-to-hsl')
const FILE_URL = 'color-data/meodai-colors.csv'

const colors = new ColorSet(FILE_URL)

colors.load((data) => {
  var rgb = new ConvertToRgb(data)
  var hsl = new ConvertToHsl(data)
  console.log(rgb.results()[0])
  console.log(hsl.results()[0])
})
