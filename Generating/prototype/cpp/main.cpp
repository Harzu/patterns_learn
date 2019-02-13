#include "circle.cpp"
#include "rectangle.cpp"
#include <iostream>
#include <string>

using namespace std;

int main() {
  // Circle init
  Circle* circle_instance = new Circle();
  circle_instance->setX(20);
  circle_instance->setY(20);
  circle_instance->setColor("red");
  circle_instance->setRadius(5);
  
  // Circle clone
  Circle * circle_clone = circle_instance->clone();

  // Circle output
  cout << "Circle:" << endl;
  cout << "X:      " << circle_clone->getX() << endl;
  cout << "Y:      " << circle_clone->getY() << endl;
  cout << "Color:  " << circle_clone->getColor() << endl;
  cout << "Radius: " << circle_clone->getRadius() << endl;
  cout << "Square: " << circle_clone->square() << endl;
  cout << "Equals: " << circle_instance->equals(*circle_clone) << endl;  

  cout << "" << endl;

  // Rectangle init
  Rectangle * rectangle_instance = new Rectangle();
  rectangle_instance->setHeight(200);
  rectangle_instance->setWidth(500);

  // Rectangle clone
  Rectangle * rectangle_clone = rectangle_instance->clone();

  // Rectangle output
  cout << "Rectangle:" << endl;
  cout << "X:      " << rectangle_clone->getX() << endl;
  cout << "Y:      " << rectangle_clone->getY() << endl;
  cout << "Color:  " << rectangle_clone->getColor() << endl;
  cout << "Width:  " << rectangle_clone->getWidth() << endl;
  cout << "Height: " << rectangle_clone->getHeight() << endl;
  cout << "Square: " << rectangle_clone->square() << endl;
  cout << "Equals: " << rectangle_instance->equals(*rectangle_clone) << endl;  
  return 0;
}