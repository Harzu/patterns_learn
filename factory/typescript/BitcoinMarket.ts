import CoinMarketFactory from './CoinMarketFactory'
import { CoinInstance, BitcoinConfig } from './interfaces'

class Bitcoin implements CoinInstance {
  private name: string
  private params: BitcoinConfig
  private startBalance: number

  constructor(params: BitcoinConfig) {
    this.name = 'BITCOIN'
    this.params = params
    this.startBalance = 100
  }

  getCoinNetwork(): string {
    return this.params.network
  }

  getCoinName(): string {
    return this.name
  }

  setCoin(value: number): void {
    this.startBalance = value
  }

  getCoinBalance(): number {
    return this.startBalance
  }
}

export default class BitcoinMarket extends CoinMarketFactory {
  private params: BitcoinConfig
  constructor(params: BitcoinConfig) {
    super()
    this.params = params
  }

  getCoinInstance(): CoinInstance {
    return new Bitcoin(this.params)
  }
}
