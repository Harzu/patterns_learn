from abc import ABC, abstractmethod

class MarketFactory(ABC):
  def printCoinInfo(self):
    coin = self.getCoinInstance()
    print(
      'coinname: ', str(coin.getName()), ' | ',
      'coin balance: ', str(coin.getBalance()), ' | ',
      'coin network: ', str(coin.getNetwork()), ' | '
    )
    pass

  @abstractmethod
  def getCoinInstance():
    pass
