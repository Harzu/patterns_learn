export interface GameParams {
  name: string
  type: string
}

export interface AppParams extends GameParams {
  price: number
}

export interface GameInstance {
  play: () => void
  getInfo(): GameParams
  printInformation: () => void
}

export interface AppInstance {
  start: () => void
  buyApp: (deposit: number) => boolean
  getInfo(): AppParams
  printInformation: () => void
}

export interface StoreFactory {
  createGame: (name: string) => GameInstance
  createApplication: (name: string) => AppInstance
}

export interface StoreInstance {
  run: (type: string, name: string) => void
  buyApp: (name: string, deposit: number) => void
  joinGame: (name: string) => void
  printInfo: (type: string, name: string) => void
}
