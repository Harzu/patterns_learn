#ifndef shape_impl
#define shape_impl

#include "shape.hpp"
#include <string>

void Shape::setColor(string new_color)
{
  color = new_color;
};

void Shape::setX(int new_x)
{
  x = new_x;
};

void Shape::setY(int new_y)
{
  y = new_y;
};

int Shape::getX()
{
  return x;
};

int Shape::getY()
{
  return y;
};

string Shape::getColor()
{
  return color;
}

#endif