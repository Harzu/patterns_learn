#ifndef circle_impl
#define circle_impl

#include "circle.hpp"
#include "shape.cpp"
#include <string>

const double PI  =3.141592653589793238463;
const float  PI_F=3.14159265358979f;

Circle::Circle(int x, int y, int radius, string color)
{
  setRadius(radius);
  setColor(color);
  setX(x);
  setY(y);
};

Circle * Circle::clone() const
{
  return new Circle(*this);
};

float Circle::square()
{
  return PI_F * (this->getRadius() * this->getRadius()); 
};

bool Circle::equals(Circle targetObject)
{
  if (targetObject.getX() != this->x) {
    return false;
  } else if (targetObject.getY() != this->y) {
    return false;
  } else if (targetObject.getColor() != this->color) {
    return false;
  } else if (targetObject.getRadius() != this->radius) {
    return false;
  } else {
    return true;
  }
};

void Circle::setRadius(int new_radius)
{
  radius = new_radius;
};

void Circle::setParams(int new_x, int new_y, int new_radius, string new_color)
{
  setX(new_x);
  setY(new_y);
  setColor(new_color);
  setRadius(new_radius);
};

int Circle::getRadius()
{
  return radius;
};

#endif