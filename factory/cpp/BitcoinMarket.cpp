#ifndef bitcoin_instance_hpp
#define bitcoin_instance_hpp

#include "CoinInstance.hpp"
#include "MarketFactory.cpp"
#include <string>

using namespace std;

class Bitcoin : public CoinInstance
{
  public:
    Bitcoin(void) {
      this->name = "Bitcoin";
      this->network = "testnet";
      this->balance = 0;
    };
    ~Bitcoin(void) {};
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

class BitcoinMarket : public MarketFactory
{
  public:
    CoinInstance * getCoinInstance() {
      return new Bitcoin();
    };
};

#endif