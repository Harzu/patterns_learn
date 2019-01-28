const Circle = require('./circle')
const Rectangle = require('./rectangle')

const circle = new Circle
circle.x = 3
circle.y = 3
circle.radius = 10
const anotherCircle = circle.clone()

const rectangle = new Rectangle
rectangle.width = 100
rectangle.height = 200
const anotherRectangle = rectangle.clone()

console.group('\n========== Circle: ===========\n')
console.log(circle)
console.table({
  equals: circle.equals(anotherCircle),
  square: circle.square()
})
console.log(anotherCircle)
console.table({
  equals: anotherCircle.equals(circle), 
  square: anotherCircle.square()
})
console.groupEnd()

console.group('\n========== Rectangle: ===========\n')
console.log(rectangle)
console.table({
  equals: rectangle.equals(anotherRectangle),
  square: rectangle.square()
})
console.log(anotherRectangle)
console.table({
  equals: anotherRectangle.equals(rectangle), 
  square: anotherRectangle.square()
})
console.groupEnd()
console.groupEnd()