#ifndef interfaces_hpp
#define interfaces_hpp

#include <string>
#include <tuple>

using namespace std;

class AppInterface
{
  public:
    virtual void start() = 0;
    virtual void printInformation() = 0;
    virtual bool buyApp(int deposit) = 0;
    virtual std::tuple<std::string, std::string, int> getInfo() = 0;
};

class GameInterface
{
  public:
    virtual void play() = 0;
    virtual void printInformation() = 0;
    virtual std::tuple<std::string, std::string> getInfo() = 0;
};

class StoreFactory
{
  public:
    virtual AppInterface * createApp(std::string name) = 0;
    virtual GameInterface * createGame(std::string name) = 0;
};

#endif