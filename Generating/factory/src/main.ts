import CoinFactory from './CoinFactory'
import { ICoin } from './interfaces'

const factory = new CoinFactory
async function printInfo(instance: ICoin) {
  const info = instance.getInfo()
  console.log('Info', info.network)
  console.log(info)
  await instance.faucet(100)
  console.log(`${info.network} balance: `, await instance.getBalance())
}

printInfo(factory.newInstance('eth'))
printInfo(factory.newInstance('btc'))