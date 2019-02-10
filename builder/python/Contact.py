class Contact:
  def __init__(self, fullName, number):
    self.fullName = fullName
    self.phoneNumber = number
    pass

  def getContactInfo(self):
    return {
      'name': self.fullName,
      'phone': self.phoneNumber
    }

  def callPhone(self):
    print('Call to ', str(self.fullName), ' on ', str(self.phoneNumber))
    pass