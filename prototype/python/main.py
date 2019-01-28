from circle import Circle
from rectangle import Rectangle

# Circle
circle = Circle()
circle.x = 5
circle.y = 5
circle.color = "red"
circle.radius = 10
anotherCircle = circle.clone()

# Rectangle
rectangle = Rectangle()
rectangle.width = 100
rectangle.height = 200
anotherRectangle = rectangle.clone()

print("Circle")
print("Equals: ", str(circle.equals(anotherCircle)))
print(
  "x: ", str(circle.x), " | ",
  "y: ", str(circle.y), " | ",
  "color: ", str(circle.color), " | ",
  "radius: ", str(circle.radius), " | "
)

print("Circle clone")
print(
  "x: ", str(anotherCircle.x), " | ",
  "y: ", str(anotherCircle.y), " | ",
  "color: ", str(anotherCircle.color), " | ",
  "radius: ", str(anotherCircle.radius), " | "
)

print("Rectangle")
print("Equals: ", str(rectangle.equals(anotherRectangle)))
print(
  "width: ", str(rectangle.width), " | ",
  "height: ", str(rectangle.height), " | "
)
print("Rectangle clone")
print(
  "width: ", str(anotherRectangle.width), " | ",
  "height: ", str(anotherRectangle.height), " | "
)