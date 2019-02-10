#include <tuple>
#include <string>
#include <iostream>
#include "interfaces.hpp"
#include "ContactBuilder.cpp"

int main () {
  ContactBuilderInterface * builder = new Contactbuilder();
  builder->setFirstName("Mark");
  builder->setLastName("Tvent");
  builder->setPhoneNumber("+7 999 872 82 82");
  ContactInterface * instance = builder->build();

  instance->callPhone();
  return 0;
}