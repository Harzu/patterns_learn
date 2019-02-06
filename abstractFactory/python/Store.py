from OSXStore import OSXStore
from interfaces import StoreInstance
from WindowsStore import WindowsStore

class Store(StoreInstance):
  def __init__(self, platform):
    self.__apps = []  
    self.__games = []

    if platform == 'windows':
      self.__factory = WindowsStore()
    if platform == 'osx':
      self.__factory = OSXStore()
    pass

  def __getInstance(self, type, name):
    instances = None
    if type == 'app':
      instances = self.__apps
    if type == 'game':
      instances = self.__games
    
    for instance in instances:
      if instance.getInfo()['name'] == name:
        return instance
    
    return None

  def run(self, type, name):
    targetInstance = self.__getInstance(type, name)
    if targetInstance == None:
      raise ValueError('instance is not define')
    
    targetType = targetInstance.getInfo()['type']
    
    if targetType == 'app':
      targetInstance.start()
    if targetType == 'game':
      targetInstance.play()

    pass

  def joinGame(self, name):
    newGame = self.__factory.createGame(name)
    self.__games.append(newGame)
    pass
  
  def buyApp(self, name, deposit):
    newApp = self.__factory.createApplication(name)
    if newApp.buyApp(deposit):
      self.__apps.append(newApp)
    
    pass

  def printInfo(self, type, name):
    targetInstance = self.__getInstance(type, name)
    if targetInstance == None:
      raise ValueError('instance is not define')

    targetInstance.printInformation()
    pass