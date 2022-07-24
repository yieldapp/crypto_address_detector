import CryptoDetect from '../index.js'
import addrs from './fixtures.json' assert {type: 'json'}

addrs.forEach(addr => {
  console.log(addr, 'result = ', CryptoDetect.detect(addr))
})
