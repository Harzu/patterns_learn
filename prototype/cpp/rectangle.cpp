#ifndef rectangle_impl
#define rectangle_impl

#include "rectangle.hpp"
#include "shape.cpp"
#include <string>

Rectangle::Rectangle(int x, int y, int width, int height, string color)
{
  setX(x);
  setY(y);
  setColor(color);
  setWidth(width);
  setHeight(height);
};

Rectangle * Rectangle::clone() const
{
  return new Rectangle(*this);
};

int Rectangle::square()
{
  return getWidth() * getHeight(); 
};

bool Rectangle::equals(Rectangle targetObject)
{
  if (targetObject.getX() != x) {
    return false;
  } else if (targetObject.getY() != y) {
    return false;
  } else if (targetObject.getColor() != color) {
    return false;
  } else if (targetObject.getWidth() != width) {
    return false;
  } else if (targetObject.getHeight() != height) {
    return false;
  } else {
    return true;
  }
};

void Rectangle::setParams(int new_x, int new_y, int new_width, int new_height, string new_color)
{
  setX(new_x);
  setY(new_y);
  setColor(new_color);
  setWidth(new_width);
  setHeight(new_height);
};

int Rectangle::getWidth()
{
  return width;
};

int Rectangle::getHeight()
{
  return height;
};

void Rectangle::setWidth(int new_width)
{
  width = new_width;
};

void Rectangle::setHeight(int new_height)
{
  height = new_height;
};

#endif