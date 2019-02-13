#ifndef contact_builder_cpp
#define contact_builder_cpp

#include <tuple>
#include <string>
#include <iostream>
#include "interfaces.hpp"
#include "Contact.cpp"

using namespace std;

class Contactbuilder : public ContactBuilderInterface
{
  public:
    string firstName;
    string lastName;
    string phoneNumber;

    Contactbuilder(void) {};

    void setFirstName(string name) {
      this->firstName = name;
    }

    void setLastName(string name) {
      this->lastName = name;
    }

    void setPhoneNumber(string phone) {
      this->phoneNumber = phone;
    }

    ContactInterface * build() {
      return new Contact(this->firstName + " " + this->lastName, this->phoneNumber);
    }
};

#endif