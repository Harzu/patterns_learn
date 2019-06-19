import { ICoin, EthereumConfig } from './interfaces'

export default class Ethereum implements ICoin {
  private balance: number
  private config: EthereumConfig

  constructor(config: EthereumConfig) {
    this.config = config
    this.balance = 0
  }

  private callContract(): Promise<number> {
    return new Promise((resolve) => {
      resolve(this.balance)
    })
  }

  async faucet(value: number): Promise<void> {
    this.balance = value
  }

  getInfo(): EthereumConfig {
    return this.config
  }

  async getBalance(): Promise<number> {
    return await this.callContract()
  }
}
