#ifndef shape_hpp_included
#define shape_hpp_included

#include <string>
using namespace std;

class Shape
{
  protected:
    int x;
    int y;
    string color;
  
  public:
    Shape(void) {};
    virtual ~Shape(void) {};
    virtual Shape * clone() const = 0;
    
    void setX(int new_x);
    void setY(int new_y);
    void setColor(string new_color);

    int getX();
    int getY();
    string getColor();
};

#endif