import CoinMarketFactory from './CoinMarketFactory'
import { CoinInstance, EthereumConfig } from './interfaces'

// Instance
class Ethereum implements CoinInstance {
  private name: string
  private params: EthereumConfig
  private balance: number

  constructor(params: EthereumConfig) {
    this.name = 'ETH'
    this.params = params
    this.balance = 100
  }

  private callCoincontract(): Promise<number> {
    return new Promise((resolve) => {
      resolve(this.balance)
    })
  }

  getCoinNetwork(): string {
    return this.params.network
  }

  getCoinName(): string {
    return this.name
  }

  setCoin(value: number): void {
    this.balance = value
  }

  async getCoinBalance(): Promise<number> {
    const balance = await this.callCoincontract()
    return balance
  }
}

// Concreate factory
export default class EthereumMarket extends CoinMarketFactory {
  private params: EthereumConfig
  constructor(params: EthereumConfig) {
    super()
    this.params = params
  }

  getCoinInstance(): CoinInstance {
    return new Ethereum(this.params)
  }
}