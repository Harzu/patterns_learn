import Bitcoin from './Bitcoin'
import Ethereum from './Ethereum'
import { ICoin, IFactory } from './interfaces'

export default class CoinFactory implements IFactory {
  newInstance(coinName: string): ICoin {
    switch (coinName) {
      case 'eth':
        return new Ethereum({
          network: 'ropsten',
          gasLimit: 100000,
          gasPrice: 100,
          ERC20Contract: '0x042'
        })
      case 'btc':
        return new Bitcoin({
          network: 'minenet'
        })
    }
  }
}
