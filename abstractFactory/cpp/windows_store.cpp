#ifndef windows_store
#define windows_store

#include <tuple>
#include <string>
#include <iostream>
#include <stdexcept>
#include "interfaces.hpp"

using namespace std;

class WindowsGame : public GameInterface
{
  private:
    std::string name;
    std::string type = "game";
  public:
    WindowsGame(std::string name) {
      this->name = name;
    }

    std::tuple<std::string, std::string> getInfo() {
      return std::make_tuple(this->name, this->type);
    }

    void play() {
      cout << "Game " << this->name << " runing" << endl;
    }

    void printInformation() {
      cout << "PLATFORM: Windows" << endl;
      cout << "NAME:     " << this->name << endl;
      cout << "TYPE:     " << this->type << endl;
    }
};

class WindowsApp : public AppInterface
{
  private:
    std::string name;
    std::string type = "app";
    int default_price = 10;
  public:
    WindowsApp(std::string name) {
      this->name = name;
    }

    std::tuple<std::string, std::string, int> getInfo() {
      return std::make_tuple(this->name, this->type, this->default_price);
    }

    bool buyApp(int deposit) {
      if (this->default_price != deposit) {
        throw std::invalid_argument("deposit less");
      }

      cout << "App " << this->name << " buyed success" << endl;
      return true;
    }

    void start() {
      cout << "App " << this->name << " started" << endl;
    }

    void printInformation() {
      cout << "PLATFORM: Windows" << endl;
      cout << "NAME:     " << this->name << endl;
      cout << "TYPE:     " << this->type << endl;
      cout << "PRICE:    " << this->default_price << endl;
    }
};

class WindowsStore : public StoreFactory
{
  public:
    AppInterface * createApp(std::string name) {
      return new WindowsApp(name);
    }

    GameInterface * createGame(std::string name) {
      return new WindowsGame(name);
    }
};

#endif