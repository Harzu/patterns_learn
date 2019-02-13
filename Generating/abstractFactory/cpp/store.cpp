#ifndef store_instance
#define store_instance

#include <tuple>
#include <string>
#include <vector>
#include <iostream>
#include <stdexcept>
#include "osx_store.cpp"
#include "windows_store.cpp"

using namespace std;

class Store
{
  private:
    StoreFactory * factory;
    std::vector<GameInterface*> games;
    std::vector<AppInterface*> apps;
  public:
    Store(std::string platform) {
      if (platform == "windows") {
        this->factory = new WindowsStore();
      } else if (platform == "osx") {
        this->factory = new OSXStore();
      } else {
        throw std::invalid_argument("don't know platform");
      }
    }

    void joinGame(std::string name) {
      GameInterface * newGame = this->factory->createGame(name);
      this->games.push_back(newGame);
    }

    void buyApp(std::string name, int deposit) {
      AppInterface * newApp = this->factory->createApp(name);
      if (newApp->buyApp(deposit) == true) {
        this->apps.push_back(newApp);
      }
    }

    void run(std::string name, std::string type) {
      if (type == "app") {
        for (int i = 0; i < this->apps.size(); i++) {
          if (std::get<0>(this->apps[i]->getInfo()) == name) {
            this->apps[i]->start();
          }
        }
      }

      if (type == "game") {
        for (int i = 0; i < this->games.size(); i++) {
          if (std::get<0>(this->games[i]->getInfo()) == name) {
            this->games[i]->play();
          }
        }
      }
    }

    void printInfo(std::string name, std::string type) {
      if (type == "app") {
        for (int i = 0; i < this->apps.size(); i++) {
          if (std::get<0>(this->apps[i]->getInfo()) == name) {
            this->apps[i]->printInformation();
          }
        }
      }

      if (type == "game") {
        for (int i = 0; i < this->games.size(); i++) {
          if (std::get<0>(this->games[i]->getInfo()) == name) {
            this->games[i]->printInformation();
          }
        }
      }
    }
};

#endif