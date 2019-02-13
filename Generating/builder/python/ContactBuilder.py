from Contact import Contact

class ContactBuilder:
  def __init__(self):
    self.firstName = None
    self.lastName = None
    self.phoneNumber = None
    pass

  def setFirstName(self, name):
    self.firstName = name
    return self
  
  def setLastName(self, name):
    self.lastName = name
    return self

  def setPhone(self, phone):
    self.phoneNumber = phone
    return self
  
  def build(self):
    if self.firstName is None or self.lastName is None or self.phoneNumber is None:
      raise ValueError('Not all needed value from create')
    return Contact(self.firstName + ' ' + self.lastName, self.phoneNumber)