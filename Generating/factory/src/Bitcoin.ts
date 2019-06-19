import { ICoin, BitcoinConfig } from './interfaces'

export default class Bitcoin implements ICoin {
  private config: BitcoinConfig
  private startBalance: number

  constructor(config: BitcoinConfig) {
    this.config = config
    this.startBalance = 0
  }

  async faucet(value: number): Promise<void> {
    this.startBalance = value
  }
  
  getInfo(): BitcoinConfig { return this.config }
  getBalance(): number { return this.startBalance }
}
