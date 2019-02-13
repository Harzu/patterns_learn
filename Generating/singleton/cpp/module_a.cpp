#include "person.cpp"
#include <string>

Person& instance_a = Person::New();

void print_person_a() {
  printf("%d %s\n", instance_a.getHuman().age, instance_a.getHuman().name.c_str());
};

void set_person_a() {
  instance_a.setHuman(42, "Ivan");
};