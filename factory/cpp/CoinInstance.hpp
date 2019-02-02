#ifndef coin_instance_hpp
#define coin_instance_hpp

#include <string>
using namespace std;

class CoinInstance
{
  protected:
    string name;
    int balance;
    string network;
  public:
    virtual string getName() = 0;
    virtual int getBalance() = 0;
    virtual string getNetwork() = 0;
    virtual void setBalance(int new_balance) = 0;
};

#endif