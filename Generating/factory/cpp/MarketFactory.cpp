#ifndef factory_instance
#define factory_instance

#include <iostream>
#include "CoinInstance.hpp"

using namespace std;

class MarketFactory
{
  public:
    void printCoinInformation() {
      CoinInstance * coin = this->getCoinInstance();

      cout << "Blockchain: " << coin->getName() << endl;
      cout << "Network:    " << coin->getNetwork() << endl;
      cout << "Balance:    " << coin->getBalance() << endl;
    };

    virtual CoinInstance * getCoinInstance() = 0;
};

#endif