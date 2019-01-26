#ifndef person_hpp_included
#define person_hpp_included

#include <string>

using namespace std;

struct Human {
  int age;
  string name;
};

class Person {
private:
  Human human;
  Person(Person const&) = delete;
  Person& operator = (Person const&) = delete;
protected:
  Person(void) {};
  ~Person(void) {};
public:
  static Person& New();
  Human& getHuman();
  void setHuman(int newAge, string newName);
};

#endif