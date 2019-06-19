import Circle from './Circle'
import Rectangle from './Rectangle'

const circleArray = []
const rectangleArray = []

const circle = new Circle({
  x: 3,
  y: 3,
  color: 'red',
  radius: 10
})

circleArray.push(circle, circle.clone())
console.log('deep equal circle')
console.log(circleArray[0].deepEquals(circleArray[1]))

const rectangle = new Rectangle({
  x: 4,
  y: 2,
  color: 'blue',
  width: 200,
  height: 100
})

rectangleArray.push(rectangle, rectangle.clone())
console.log('deep equal rectangle')
console.log(rectangleArray[0].deepEquals(rectangleArray[1]))