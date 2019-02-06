import Store from './Store'

function storeStart() {
  const windowsStore = new Store('windows')
  windowsStore.joinGame('Beast battle 2')
  windowsStore.buyApp('TikTok', 10)
  windowsStore.printInfo('game', 'Beast battle 2')
  windowsStore.printInfo('app', 'TikTok')

  const macStore = new Store('osx')
  macStore.joinGame('Dota2')
  macStore.buyApp('Alfred', 10)
  macStore.printInfo('game', 'Dota2')
  macStore.printInfo('app', 'Alfred')
}

storeStart()