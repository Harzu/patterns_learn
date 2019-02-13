#include "module_a.cpp"
#include "module_b.cpp"
#include <string>

int main() {
  set_person_a();
  print_person_b();
  set_person_b();
  print_person_a();
  return 0;
};