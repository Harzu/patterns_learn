export interface AppParams {
  name: string
  type: string
  price: number
  game: boolean
  [key: string]: any
}

export interface IApp {
  run(): void
  buy(): void
  printInformation(): void
}

export interface StoreFactory {
  createApp(params: AppParams): void
  getApp(name: string): IApp
}

export interface IStore {
  buy(name: string): void
  run(name: string): void
  createApps(appsInfo: AppParams[]): void
  printInfo(name: string): void
}
