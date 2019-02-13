#ifndef reverse_ins
#define reverse_ins

#include "IReverse.hpp"
#include <string>

using namespace std;

class Target : public TargetInterface
{
  public:
    string getMessage() {
      return "My first message";
    }
};

class DifferentTarget
{
  public:
    string getDifferentMessage() {
      return "egassem desreveR";
    }
};

class TargetAdapter : public TargetInterface
{
  private:
    DifferentTarget * adaptee;
  public:
    TargetAdapter(DifferentTarget * target) {
      this->adaptee = target;
    }

    string getMessage() {
      string mess = this->adaptee->getDifferentMessage();
      reverse(mess.begin(), mess.end());
      
      return mess;
    }
};

#endif