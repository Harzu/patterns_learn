class Target:
  def getMessage(self) -> str:
    return 'My first message'

class DifferentTarget:
  def getDifferentMessage(self) -> str:
    return 'egassem desreveR'

class TargetAdapter:
  def __init__(self, adaptee: DifferentTarget):
    self.adaptee = adaptee
    pass

  def getMessage(self):
    message = self.adaptee.getDifferentMessage()
    reverse = list(message)
    return ''.join(reverse[::-1])