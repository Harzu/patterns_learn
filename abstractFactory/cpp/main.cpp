#include <iostream>
#include "store.cpp"

using namespace std;

int main() {
  cout << "select platform" << endl;
  std::string platform;
  cin >> platform;

  Store * instance = new Store(platform);
  std::string gameName = "Beast battle 2";
  std::string appName = "Itunes";

  instance->joinGame("Beast battle 2");
  instance->buyApp("Itunes", 10);

  instance->printInfo(gameName, "game");
  instance->printInfo(appName, "app");

  
  instance->run(gameName, "game");
  instance->run(appName, "app");
  return 0;
}