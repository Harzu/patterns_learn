class Person():
  __instance = None

  @staticmethod
  def getInstance():
    if Person.__instance == None:
      Person.__instance = Person()
    
    return Person.__instance

  def __init__(self):
    self.__human = {
      'name': 'Ivan',
      'age': 23
    }
    pass

  def getHuman(self):
    return self.__human
  
  def setHuman(self, name, age):
    self.__human['name'] = name
    self.__human['age'] = age
    pass