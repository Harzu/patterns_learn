import {
  AppParams,
  GameParams,
  AppInstance,
  GameInstance,
  StoreFactory
} from './interfaces'

class OSXGame implements GameInstance {
  private params: GameParams
  private static PLATFORM: string = 'OSX'
  
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
    console.log(`Platform: ${OSXGame.PLATFORM}`)
    console.table(this.params)
  }
}

class OSXApp implements AppInstance {
  private params: AppParams
  private static PLATFORM: string = 'OSX'
  private static DEFAULT_PRICE: number = 10

  constructor(name: string) {
    this.params = {
      name,
      type: 'app',
      price: OSXApp.DEFAULT_PRICE
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

    console.log(`App ${this.params.name} purchased for ${OSXApp.PLATFORM} written off ${this.params.price}$`)
    return true
  }

  start(): void {
    console.log(`App ${this.params.name} started`)
  }

  printInformation(): void {
    console.log(`Platform: ${OSXApp.PLATFORM}`)
    console.table(this.params)
  }
}

export default class OSXStore implements StoreFactory {
  createApplication(name: string): AppInstance {
    return new OSXApp(name)
  }

  createGame(name: string): GameInstance {
    return new OSXGame(name)
  }
}