#ifndef contact_cpp
#define contact_cpp

#include <tuple>
#include <string>
#include <iostream>
#include "interfaces.hpp"

using namespace std;

class Contact : public ContactInterface
{
  private:
    string fullName;
    string phoneNumber;
  public:
    Contact(string fullName, string phone) {
      this->fullName = fullName;
      this->phoneNumber = phone;
    }
    void callPhone() {
      cout << "Call to " << this->fullName << " on " << this->phoneNumber << endl;
    }

    tuple<string, string> getContactInfo() {
      return make_tuple(this->fullName, this->phoneNumber);
    }
};

#endif