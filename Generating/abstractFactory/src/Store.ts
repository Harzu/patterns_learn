import {
  IStore,
  AppParams,
  StoreFactory
} from './interfaces'

import OSXStore from './OSXStore'
import WindowsStore from './WindowsStore'

export default class Store implements IStore {
  private factory: StoreFactory

  constructor(platform: string) {
    switch (platform) {
      case 'windows':
        this.factory = new WindowsStore
        break
      case 'osx':
        this.factory = new OSXStore
        break
      default:
        throw new Error(`Not know this platform ${platform}`)
    }
  }

  createApps(appsInfo: AppParams[]) {
    for (const info of appsInfo) {
      this.factory.createApp(info)
    }
  }

  buy(name: string) {
    const app = this.factory.getApp(name)
    app.buy()
  }

  run(name: string) {
    const app = this.factory.getApp(name)
    app.run()
  }

  printInfo(name: string) {
    const app = this.factory.getApp(name)
    app.printInformation()    
  }
}