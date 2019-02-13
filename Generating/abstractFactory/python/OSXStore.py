from interfaces import AppInterface, GameInterface, StoreFactory

class OSXGame(GameInterface):
  __params = None
  PLATFORM = 'OSX'
  
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
    print('PLATFORM: ', str(OSXGame.PLATFORM))
    print(
      'GAME NAME: ', str(self.__params['name']), '\n'
      'TYPE: ', str(self.__params['type']), '\n'
    )
    pass

class OSXApp(AppInterface):
  __params = None
  PLATFORM = 'OSX'
  DEFAULTPRICE = 10

  def __init__(self, name):
    self.__params = {
      'name': name,
      'type': 'app',
      'price': OSXApp.DEFAULTPRICE
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
      ' purchased for ', str(OSXApp.PLATFORM),
      ' written off ', str(self.__params['price'])
    )
    
    return True

  def printInformation(self):
    print('PLATFORM: ', str(OSXApp.PLATFORM))
    print(
      'APP NAME: ', str(self.__params['name']), '\n'
      'TYPE: ', str(self.__params['type']), '\n'
      'APP PRICE: ', str(self.__params['price']), '\n'
    )
    pass

class OSXStore(StoreFactory):
  def createGame(self, name):
    return OSXGame(name)
  def createApplication(self, name):
    return OSXApp(name)