#ifndef interfaces_hpp
#define interfaces_hpp

#include <string>
#include <tuple>

using namespace std;

class ContactInterface
{  
  public:
    virtual void callPhone() = 0;
    virtual tuple<string, string> getContactInfo() = 0;
};

class ContactBuilderInterface
{
  public:
    virtual void setFirstName(string name) = 0;
    virtual void setLastName(string name) = 0;
    virtual void setPhoneNumber(string phone) = 0;
    virtual ContactInterface * build() = 0;
};

#endif