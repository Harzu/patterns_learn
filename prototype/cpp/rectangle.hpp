#ifndef rectangle_hpp_include
#define rectangle_hpp_include

#include "shape.hpp"
#include <string>

class Rectangle : public Shape
{
  private:
    int width;
    int height;
  public:
    Rectangle(void) {};
    Rectangle(int x, int y, int width, int height, string color);
    virtual ~Rectangle(void) {};
    virtual Rectangle * clone() const;
    int getWidth();
    int getHeight();
    int square();
    bool equals(Rectangle targetObject);
    void setWidth(int new_width);
    void setHeight(int new_height);
    void setParams(int new_x, int new_y, int new_width, int new_height, string new_color);
};

#endif