#ifndef ethereum_instance_hpp
#define ethereum_instance_hpp

#include "CoinInstance.hpp"
#include "MarketFactory.cpp"
#include <string>

using namespace std;

class Ethereum : public CoinInstance
{
  public:
    Ethereum(void) {
      this->name = "Ethereum";
      this->network = "ropsten";
      this->balance = 0;
    };
    ~Ethereum(void) {};
    
    string getName() {
      return this->name;
    };

    int getBalance() {
      return this->balance;
    };

    string getNetwork() {
      return this->network;
    };

    void setBalance(int new_balance) {
      this->balance = new_balance;
    };
};

class EthereumMarket : public MarketFactory
{
  public:
    CoinInstance * getCoinInstance() {
      return new Ethereum();
    }
};

#endif