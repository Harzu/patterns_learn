import Store from './Store'

function storeStart() {
  const windowsStore = new Store('windows')
  windowsStore.createApps([
    {
      name: 'Beast battle',
      type: 'strategy',
      price: 9,
      game: true,
      multiplayer: false
    },
    {
      name: 'instagram',
      type: 'photo',
      price: 0,
      game: false,
    }
  ])
  windowsStore.buy('Beast battle')
  windowsStore.run('Beast battle')
  windowsStore.printInfo('instagram')

  const macStore = new Store('osx')
  macStore.createApps([
    {
      name: 'Dota 2',
      type: 'moba',
      price: 0,
      game: true,
      multiplayer: true
    },
    {
      name: 'iTerm',
      type: 'terminal app',
      price: 0,
      game: false
    }
  ])
  macStore.buy('iTerm')
  macStore.run('iTerm')
  macStore.printInfo('Dota 2')
}

storeStart()