import CryptoDetector from '../index.js'
import addrs from './fixtures.json' assert {type: 'json'}

addrs.forEach(async addr => {
  console.log(addr, 'result = ', await CryptoDetector.detect(addr))
})
