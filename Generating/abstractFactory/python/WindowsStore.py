from interfaces import AppInterface, GameInterface, StoreFactory

class WindowsGame(GameInterface):
  __params = None
  PLATFORM = 'Windows'
  
  def __init__(self, name):
    self.__params = {
      'name': name,
      'type': 'game'
    }

    print('Game ', str(self.__params['name']), ' is created')    
    pass
  
  def play(self):
    print('Game ', str(self.__params['name']), ' is started!')
    pass
  
  def getInfo(self):
    return self.__params
  
  def printInformation(self):
    print('PLATFORM: ', str(WindowsGame.PLATFORM))
    print(
      'GAME NAME: ', str(self.__params['name']), '\n'
      'TYPE: ', str(self.__params['type']), '\n'
    )
    pass

class WindowsApp(AppInterface):
  __params = None
  PLATFORM = 'Windows'
  DEFAULTPRICE = 10

  def __init__(self, name):
    self.__params = {
      'name': name,
      'type': 'app',
      'price': WindowsApp.DEFAULTPRICE
    }
    
    print('App ', str(self.__params['name']), ' is created')
    print(
      'APP NAME: ', str(self.__params['name']), '\n'
      'TYPE: ', str(self.__params['type']), '\n'
    )
    pass

  def getInfo(self):
    return self.__params
  
  def start(self):
    print('App ', str(self.__params['name']), ' is started')
    pass
  
  def buyApp(self, deposit):
    if deposit < self.__params['price']:
      raise ValueError(
        'your deposit less your: ', str(deposit),
        ' needed: ', str(self.__params['price'])
      )

    print(
      'App ', str(self.__params['name']),
      ' purchased for ', str(WindowsApp.PLATFORM),
      ' written off ', str(self.__params['price'])
    )
    
    return True

  def printInformation(self):
    print('PLATFORM: ', str(WindowsApp.PLATFORM))
    print(
      'APP NAME: ', str(self.__params['name']), '\n'
      'TYPE: ', str(self.__params['type']), '\n'
      'APP PRICE: ', str(self.__params['price']), '\n'
    )
    pass

class WindowsStore(StoreFactory):
  def createGame(self, name):
    return WindowsGame(name)
  def createApplication(self, name):
    return WindowsApp(name)