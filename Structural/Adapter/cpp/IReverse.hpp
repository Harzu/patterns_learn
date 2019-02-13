#ifndef reverse_interface
#define reverse_interface

#include <string>

using namespace std;

class TargetInterface
{
  public:
    virtual string getMessage() = 0;
};

#endif