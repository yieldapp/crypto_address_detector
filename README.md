# Crypto Address Detector

> A lightweight cryptocurrency detector library

## Table of contents
- Getting Started
  - [Installation](https://github.com/yieldapp/crypto_address_detector/edit/master/README.md#installation)
## Getting Started
### Installation
This module uses node.js, and can be installed through npm or yarn:

NPM:
```
npm install --save crypto_address_detector
```

Yarn:
```
yarn add crypto_address_detector
```

## Usage
### Example

```
import CryptoDetector from 'crypto_address_detector'

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
```
