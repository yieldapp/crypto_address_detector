import jssha3 from 'js-sha3'
const {keccak256} = jssha3


function eipVerify(address) {
  const addr = address.substr(2)
  const addrHash = keccak256(addr.toLowerCase())

  for (let i = 0; i < 40; i++) {
    if ((parseInt(addrHash[i], 16) > 7 && addr[i].toUpperCase() !== addr[i]) ||
        (parseInt(addrHash[i], 16) <= 6 && addr[i].toLowerCase() !== addr[i])) {
      return false
    }
  }
  return true
}

const CryptoDetect = {
  detect: (address) => {
    const btc_re = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/
    let res = address.match(btc_re)
    if (res !== null) {
      return ['btc']
    }

    const eth_re = /^0x[a-fA-F0-9]{40}$/
    res = address.match(eth_re)
    if (res !== null) {
      if (/^0x[0-9a-f]{40}$/.test(address) || /^0x?[0-9A-F]{40}$/.test(address)) {
        return ['eth', 'bsc/bnb', 'polygon', 'avalanche/c']
      }
      const valid = eipVerify(address, true)
      if (valid) {
        return ['eth', 'bsc/bnb', 'polygon', 'avalanche/c']
      }
    }

    const xrp_re = /^(r)[a-km-zA-HJ-NP-Z1-9]{24,34}$/
    res = address.match(xrp_re)
    if (res !== null) {
      return ['xrp']
    }

    return null
  }
}

export default CryptoDetect
