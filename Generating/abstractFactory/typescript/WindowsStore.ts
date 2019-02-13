import {
  AppParams,
  GameParams,
  AppInstance,
  GameInstance,
  StoreFactory
} from './interfaces'

class WindowsGame implements GameInstance {
  private params: GameParams
  private static PLATFORM: string = 'Windows'
  
  constructor(name: string) {
    this.params = {
      name,
      type: 'game'
    }

    console.log('Game created')
    console.table(this.params)
  }

  getInfo(): GameParams {
    return this.params
  }
  
  play(): void {
    console.log(`Game ${this.params.name} started`)
  }

  printInformation(): void {
    console.log(`Platform: ${WindowsGame.PLATFORM}`)
    console.table(this.params)
  }
}

class WindowsApp implements AppInstance {
  private params: AppParams
  private static PLATFORM: string = 'Windows'
  private static DEFAULT_PRICE: number = 10

  constructor(name: string) {
    this.params = {
      name,
      type: 'app',
      price: WindowsApp.DEFAULT_PRICE
    }

    console.log('App created')
    console.table(this.params)
  }

  getInfo(): AppParams {
    return this.params
  }

  buyApp(deposit: number): boolean {
    if (deposit < this.params.price) {
      throw new Error(`Error your deposit less your: ${deposit} needed: ${this.params.price}`)
    }

    console.log(`App ${this.params.name} purchased for ${WindowsApp.PLATFORM} written off ${this.params.price}$`)
    return true
  }

  start(): void {
    console.log(`App ${this.params.name} started`)
  }

  printInformation(): void {
    console.log(`Platform: ${WindowsApp.PLATFORM}`)
    console.table(this.params)
  }
}

export default class WindowsStore implements StoreFactory {
  createApplication(name: string): AppInstance {
    return new WindowsApp(name)
  }

  createGame(name: string): GameInstance {
    return new WindowsGame(name)
  }
}