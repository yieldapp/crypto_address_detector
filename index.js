const eip = require('eip55')

function detect(address) {
  const btc_re = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/
  let res = address.match(btc_re)
  if (res !== null) {
    return ['btc']
  }

  const eth_re = /^0x[a-fA-F0-9]{40}$/
  res = address.match(eth_re)
  if (res !== null) {
    const valid = eip.verify(address, true)
    if (valid) {
      return ['eth', 'bsc/bnb', 'polygon', 'avalanche/c']
    }
  }
  return null
}

module.exports = {detect}
