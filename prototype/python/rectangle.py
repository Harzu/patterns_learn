from copy import copy
from shape import Shape

class Rectangle(Shape):
  width = None
  height = None

  def __init__(self, params = None):
    if params is not None:
      self.width = params.width
      self.height = params.height
    pass

  def clone(self):
    return copy(self)
  
  def square(self):
    return self.width * self.height
  
  def equals(self, targetObject):
    if targetObject.x != self.x:
      return False
    if targetObject.y != self.y:
      return False
    if targetObject.color != self.color:
      return False
    if targetObject.width != self.width:
      return False
    if targetObject.height != self.height:
      return False
    
    return True