const detector = require('../index.js')
const addrs = require('./fixtures')

addrs.forEach(addr => {
  console.log(addr, 'result = ', detector.detect(addr))
})
