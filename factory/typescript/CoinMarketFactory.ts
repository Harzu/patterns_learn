import {
  CoinInstance,
  FactoryInstance
} from './interfaces'

export default abstract class CoinMarketFactory implements FactoryInstance {
  async printCoinInformation(): Promise<void> {
    const coin = this.getCoinInstance()
    const information = {
      name: coin.getCoinName(),
      network: coin.getCoinNetwork(),
      balance: await coin.getCoinBalance()
    }

    console.table(information)
  }
  
  abstract getCoinInstance(): CoinInstance
}
