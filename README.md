# Crypto Address Detector

> A lightweight cryptocurrency detector library
> that is compatible with react native.
> This module also validates Ethereum addressess against EIP-55

## Table of contents
- Getting Started
  - [Installation](https://github.com/yieldapp/crypto_address_detector/edit/master/README.md#installation)
  - [Usage](https://github.com/yieldapp/crypto_address_detector/blob/master/README.md#usage)
    - [Example](https://github.com/yieldapp/crypto_address_detector/blob/master/README.md#example)
   
## Getting Started
### Installation
This module uses node.js, and can be installed through npm or yarn:

NPM:
```
npm install --save @yieldapp/crypto-address-detector
```

Yarn:
```
yarn add @yieldapp/crypto-address-detector
```

## Usage
### Example

```
import CryptoDetector from 'crypto_address_detector'

let addr = 'bc1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf'
let res = await CryptoDetector.detect(addr)
console.log(addr, 'result = ',  res)
// bc1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf result =  [ 'btc' ]

// An invalid address...should return null
addr = 'c1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf'
res = await CryptoDetector.detect(addr)
console.log(addr, 'result = ',  res)
// c1q7cyrfmck2ffu2ud3rn5l5a8yv6f0chkp0zpemf result =  null

addr = '3PHictxPg9gCLbSuwnvDhPtm9xkAM32Xs4'
res = await CryptoDetector.detect(addr)
console.log(addr, 'result = ',  res)
// 3PHictxPg9gCLbSuwnvDhPtm9xkAM32Xs4 result =  [ 'btc' ]

// an invalid ethereum like address
addr = '0x3PHictxPg9gCLbSuwnvDhPtm9xkAM32Xs4'
res = await CryptoDetector.detect(addr)
console.log(addr, 'result = ',  res)
// 0x3PHictxPg9gCLbSuwnvDhPtm9xkAM32Xs4 result =  null

// a valid ethereum compatible address
addr = '0xea674fdde714fd979de3edf0f56aa9716b898ec8'
res = await CryptoDetector.detect(addr)
console.log(addr, 'result = ',  res)
// 0xea674fdde714fd979de3edf0f56aa9716b898ec8 result =  [ 'eth', 'bsc/bnb', 'polygon', 'avalanche/c' ]
```
