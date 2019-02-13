#ifndef circle_hpp_include
#define circle_hpp_include

#include "shape.hpp"
#include <string>

class Circle : public Shape
{
  private:
    int radius;
  public:
    Circle(void) {};
    Circle(int x, int y, int radius, string color);
    virtual ~Circle(void) {};
    virtual Circle * clone() const;
    int getRadius();
    float square();
    bool equals(Circle targetObject);
    void setRadius(int new_radius);
    void setParams(int new_x, int new_y, int new_radius, string new_color);
};

#endif