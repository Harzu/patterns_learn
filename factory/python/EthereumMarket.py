from MarketFactory import MarketFactory

class Ethereum:
  params = None
  
  def __init__(self, params):
    self.name = 'Ethereum'
    self.params = params
    self.balance = 0
    pass
  
  def getName(self):
    return self.name

  def getNetwork(self):
    return self.params['configuration']['network']

  def getBalance(self):
    return self.balance

  def setBalance(self, newBalanceValue):
    self.balance = newBalanceValue
    pass

class EthereumMarket(MarketFactory):
  params = None

  def __init__(self, params):
    self.params = params
    pass

  def getCoinInstance(self):
    return Ethereum(self.params)
