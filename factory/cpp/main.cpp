#include "BitcoinMarket.cpp"
#include "EthereumMarket.cpp"
#include <iostream>
#include <string>
using namespace std;

MarketFactory * factory(string name) {
  cout << name << endl;

  if (name == "bitcoin") {
    return new BitcoinMarket();
  };

  if (name == "ethereum") {
    return new EthereumMarket();
  };

  cout << "Not found instance" << endl;
};

int main() {
  string coin_name;
  cout << "Please input coin name for create market!" << endl;
  cin >> coin_name;
  
  MarketFactory * market = factory(coin_name);
  market->printCoinInformation();
  return 0;
}