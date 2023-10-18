import jssha3 from 'js-sha3'
const {keccak256} = jssha3

// for solana ss58
import {PublicKey} from '@solana/web3.js'

// for polkador
import {decodeAddress, encodeAddress} from '@polkadot/keyring'
import {hexToU8a, isHex} from '@polkadot/util'


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

async function VerifySolana(address) {
  try {
  const publicKey = new PublicKey(address)
  return await PublicKey.isOnCurve(publicKey)
  } catch (e) {
    return false
  }
}

function VerifyPolkadot(address) {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address))
    return true
  } catch (e) {
    return false
  }
}

const CryptoDetect = {
  detect: async address => {
    const btc_re = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/
    let res = address.match(btc_re)
    if (res !== null) {
      return ['btc']
    }

    const cosmos_re = /^(cosmos1)[a-zA-HJ-NP-Z0-9]{25,39}$/
    res = address.match(cosmos_re)
    if (res !== null) {
      return ['cosmos']
    }

    const eth_re = /^0x[a-fA-F0-9]{40}$/
    res = address.match(eth_re)
    if (res !== null) {
      if (/^0x[0-9a-f]{40}$/.test(address) || /^0x?[0-9A-F]{40}$/.test(address)) {
        return ['eth', 'bsc/bnb', 'polygon', 'avalanche/c', 'chainlink']
      }
      const valid = eipVerify(address, true)
      if (valid) {
        return ['eth', 'bsc/bnb', 'polygon', 'avalanche/c', 'chainlink']
      }
    }

    const xrp_re = /^(r)[1-9A-HJ-NP-Za-km-z]{24,34}$/
    // const xrp_re = /^(r)[a-km-zA-HJ-NP-Z1-9]{24,34}$/
    res = address.match(xrp_re)
    if (res !== null) {
      return ['ripple']
    }

    res = await VerifySolana(address)
    if (res !== null && res === true) {
      return ['solana']
    }

    res = await VerifyPolkadot(address)
    if (res !== null && res === true) {
      return ['polkadot']
    }

    return null
  }
}

export default CryptoDetect
