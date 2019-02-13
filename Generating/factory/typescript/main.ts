import BitcoinMarket from './BitcoinMarket'
import EthereumMarket from './EthereumMarket'
import { MarketParams, EthereumConfig, BitcoinConfig } from './interfaces'

function createCoinMarket(params: MarketParams) {
  switch (params.coinName) {
    case 'bitcoin':
      return new BitcoinMarket((params.coinConfig as BitcoinConfig))
    case 'ethereum':
      return new EthereumMarket((params.coinConfig as EthereumConfig))
    default:
      throw new Error('Unknow this platform')
  }
}

const run = async () => {  
  const BTCMarket = createCoinMarket({
    coinName: 'bitcoin',
    coinConfig: { network: 'testnet' }
  })

  const bitCoin = BTCMarket.getCoinInstance()
  const bicoinNetwork = bitCoin.getCoinNetwork()
  console.log(bicoinNetwork)

  const ETHMarket = createCoinMarket({
    coinName: 'ethereum',
    coinConfig: { network: 'ropsten', gasLimit: 640000, gasPrice: 10000 }
  })

  const ethereumCoin = ETHMarket.getCoinInstance()
  const ethereumNetwork = ethereumCoin.getCoinNetwork()
  console.log(ethereumNetwork)

  await BTCMarket.printCoinInformation()
  await ETHMarket.printCoinInformation()
}

run()