from BitcoinMarket import BitcoinMarket
from EthereumMarket import EthereumMarket

def createCoinMarket(params):
  if params['coinName'] == 'bitcoin':
    return BitcoinMarket(params)
  if params['coinName'] == 'ethereum':
    return EthereumMarket(params)

BTCMarket = createCoinMarket({
  'coinName': 'bitcoin',
  'configuration': { 'network': 'testnet' }
})

ETHMarket = createCoinMarket({
  'coinName': 'ethereum',
  'configuration': { 'network': 'ropsten', 'gasLimit': 640000, 'gasPrice': 1000 }
})

BTCMarket.printCoinInfo()
ETHMarket.printCoinInfo()