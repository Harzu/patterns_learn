from shape import Shape
from math import pow, pi

class Circle(Shape):
  radius = None
  
  def __init__(self, params = None):
    if params is not None:
      self.radius = params['radius']
    pass
  
  def square(self):
    return pi * pow(self.radius, 2)

  def clone(self):
    return Circle({
      'x': self.x,
      'y': self.y,
      'color': self.color,
      'radius': self.radius
    })

  def equals(self, targetObject):
    if targetObject.radius != self.radius:
      return False
    if targetObject.x != self.x:
      return False
    if targetObject.y != self.y:
      return False
    if targetObject.color != self.color:
      return False
    
    return True