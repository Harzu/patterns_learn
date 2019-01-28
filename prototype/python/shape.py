from abc import ABC, abstractmethod

class Shape(ABC):
  x = None
  y = None
  color = None
  
  def __init__(self, params = None):
    if params is not None:
      self.x = params['x']
      self.y = params['y']
      self.color = params['color']

  @abstractmethod
  def clone():
    pass
