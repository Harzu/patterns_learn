import {
  AppInstance,
  StoreFactory,
  GameInstance,
  StoreInstance
} from './interfaces'

import OSXStore from './OSXStore'
import WindowsStore from './WindowsStore'

export default class Store implements StoreInstance {
  private apps: AppInstance[]
  private games: GameInstance[]
  private factory: StoreFactory
  
  constructor(platform: string) {
    this.apps = [] as AppInstance[]
    this.games = [] as GameInstance[]

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

  private getInstance(type: string, name: string): any {
    let instance: any
    switch (type) {
      case 'game':
        instance = this.games
        break
      case 'app':
        instance = this.apps
        break
      default:
        throw new Error(`Not found type is ${type}`)
    }

    return instance.find(inst => inst.getInfo().name === name)
  }

  run(type: string, name: string): void {
    const target = this.getInstance(type, name)
    if (typeof target === 'undefined') {
      throw new Error(`${type} instance with name ${name} not found`)
    }

    const { targetType } = target.getInfo()
    switch (targetType) {
      case 'game':
        target.play()
        break
      case 'app':
        target.start()
        break
      default:
        throw new Error(`Not found type: ${targetType}`)
    }
  }

  joinGame(name: string): void {
    const newGame = this.factory.createGame(name)
    this.games.push(newGame)
  }

  buyApp(name: string, deposit: number): void {
    const newApp = this.factory.createApplication(name)
    if (newApp.buyApp(deposit)) this.apps.push(newApp)
  }

  printInfo(type: string, name: string): void {
    const target = this.getInstance(type, name)
    if (typeof target === 'undefined') {
      throw new Error(`${type} instance with name ${name} not found`)
    }

    target.printInformation()
  }
}