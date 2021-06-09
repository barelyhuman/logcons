const { white } = require('kleur')
const { logcons } = require('../dist/index')

console.log(logcons.tick())
console.log(logcons.info())
console.log(logcons.warn())
console.log(logcons.cross())
console.log(logcons.radioactive())
console.log(logcons.yinyang())
console.log(logcons.lightning())
console.log(logcons.wheelOfDharma())
console.log(logcons.peace())
console.log(logcons.biohazard())

console.log('===Custom Coloured===')

console.log(
  `Original: ${logcons.heart()} Custom: ${logcons.heart(white().bold)}`
)

console.log(
  `Original: ${logcons.cross()} Custom: ${logcons.cross((icon) => icon)}`
)
