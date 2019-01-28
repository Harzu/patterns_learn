const Shape = require('./shape')

class Circle extends Shape {
  constructor(params) {
    super(params)
    if (params) {
      this.radius = params.radius
    }
  }

  clone() {
    return new Circle(this)
  }

  square() {
    return Math.PI * Math.pow(this.radius, 2)
  }  

  equals(object) {
    switch (true) {
      case (object.x !== this.x):
        return false
      case (object.y !== this.y):
        return false
      case (object.radius !== this.radius):
        return false
      case (object.color !== this.color):
        return false
      default:
        return true
    }
  }
}

module.exports = Circle