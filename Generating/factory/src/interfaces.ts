export interface BitcoinConfig {
  network: string
}

export interface EthereumConfig {
  network: string
  ERC20Contract: string
  gasPrice: number
  gasLimit: number
}

export interface MarketParams {
  coinName: string
  ethConfig?: EthereumConfig
  btcConfig?: BitcoinConfig
}

export interface CoinInformation {
  name: string
  balance: number
}

export interface ICoin {
  faucet(value: number): Promise<void>
  getBalance(): any
  getInfo(): any
}

export interface IFactory {
  newInstance(coinName: string): ICoin
}
