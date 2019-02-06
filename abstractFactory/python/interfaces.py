from abc import ABC, abstractmethod

class GameInterface(ABC):
  @abstractmethod
  def play(self): pass
  @abstractmethod
  def getInfo(self): pass
  @abstractmethod
  def printInformation(): pass

class AppInterface(ABC):
  @abstractmethod
  def start(self): pass
  @abstractmethod
  def buyApp(self, deposit): pass
  @abstractmethod
  def getInfo(self): pass
  @abstractmethod
  def printInformation(self): pass

class StoreFactory(ABC):
  @abstractmethod
  def createGame(self, name): pass
  @abstractmethod
  def createApplication(self, name): pass

class StoreInstance(ABC):
  @abstractmethod
  def run(self, type, name): pass
  @abstractmethod
  def buyApp(self, name, deposit): pass
  @abstractmethod
  def joinGame(self, name): pass
  @abstractmethod
  def printInfo(self, type, name): pass