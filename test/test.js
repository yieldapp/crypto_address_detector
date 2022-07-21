import CryptoDetect from '../index.js'

let addr = 'bc1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf'
let res = CryptoDetect.detect(addr)
console.log(addr, 'result = ',  res)

addr = 'c1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf'
res = CryptoDetect.detect(addr)
console.log(addr, 'result = ',  res)

addr = '3PHictxPg9gCLbSuwnvDhPtm9xkAM32Xs4'
res = CryptoDetect.detect(addr)
console.log(addr, 'result = ',  res)

addr = '0x3PHictxPg9gCLbSuwnvDhPtm9xkAM32Xs4'
res = CryptoDetect.detect(addr)
console.log(addr, 'result = ',  res)

addr = '0xea674fdde714fd979de3edf0f56aa9716b898ec8'
res = CryptoDetect.detect(addr)
console.log(addr, 'result = ',  res)
