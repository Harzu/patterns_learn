#include "person.cpp"
#include <string>

Person& instance_b = Person::New();

void print_person_b() {
  printf("%d %s\n", instance_b.getHuman().age, instance_b.getHuman().name.c_str());
};

void set_person_b() {
  instance_b.setHuman(23, "Ilya");
};