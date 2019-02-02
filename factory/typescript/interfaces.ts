export interface BitcoinConfig {
  network: string
}

export interface EthereumConfig {
  network: string
  gasPrice: number
  gasLimit: number
}

export type CoinConfig = BitcoinConfig | EthereumConfig

export interface MarketParams {
  coinName: string
  coinConfig: CoinConfig
}

export interface CoinInformation {
  name: string
  balance: number
}

export interface CoinInstance {
  setCoin: (value: number) => void
  getCoinName: () => string
  getCoinBalance: () => number | Promise<number>
  getCoinNetwork: () => string
}

export interface FactoryInstance {
  printCoinInformation: () => Promise<void>
  getCoinInstance: () => CoinInstance
}
