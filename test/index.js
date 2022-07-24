import detector from '../index.js'
import addrs from './fixtures.json' assert {type: 'json'}

addrs.forEach(addr => {
  console.log(addr, 'result = ', detector(addr))
})
