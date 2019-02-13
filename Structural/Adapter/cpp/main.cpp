#include <string>
#include <iostream>
#include "reverse.cpp"

using namespace std;

void run(TargetInterface * target) {
  cout << target->getMessage() << endl;
}

int main() {
  Target * targ = new Target();
  run(targ);

  DifferentTarget * diffTarg = new DifferentTarget();
  cout << diffTarg->getDifferentMessage() << endl;

  TargetAdapter * adapter = new TargetAdapter(diffTarg);
  run(adapter);
  return 0;
}