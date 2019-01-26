#ifndef person_impl
#define person_impl

#include "person.hpp"
#include <string>

Person& Person::New() {
  static Person instance;
  return instance;
};

Human& Person::getHuman() {
  return this->human;
};

void Person::setHuman(int newAge, string newName) {
  this->human.name = newName;
  this->human.age = newAge;
};

#endif