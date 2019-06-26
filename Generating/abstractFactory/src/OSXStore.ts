import {
  IApp,
  AppParams,
  StoreFactory
} from './interfaces'

const PLATFORM = 'OSX'

class OSXGame implements IApp {
  constructor(private params: AppParams) {
    console.log('Game created')
    console.table(this.params)
  }

  buy() {
    console.log(
      `Game ${this.params.name} purchased for ${PLATFORM} written off ${this.params.price}$`
    )
  }
  
  run() {
    console.log(`Game ${this.params.name} started`)
  }

  printInformation(): void {
    console.log(`Platform: ${PLATFORM}`)
    console.table(this.params)
  }
}

class OSXApp implements IApp {
  constructor(private params: AppParams) {
    console.log('App created')
    console.table(this.params)
  }

  buy() {
    console.log(
      `App ${this.params.name} purchased for ${PLATFORM} written off ${this.params.price}$`
    )
  }

  run() {
    console.log(`App ${this.params.name} started`)
  }

  printInformation(): void {
    console.log(`Platform: ${PLATFORM}`)
    console.table(this.params)
  }
}

export default class OSXStore implements StoreFactory {
  private apps: Map<string, IApp>
  constructor() {
    this.apps = new Map
  }

  createApp(params: AppParams) {
    const { name, game } = params
    const instance = (!game)
      ? new OSXApp(params)
      : new OSXGame(params);
    
    this.apps.set(name, instance)
  }

  getApp(name: string): IApp {
    const app = this.apps.get(name)
    if (!app) {
      throw new Error(`Apps ${name} is not created`)
    }

    return app
  }
}