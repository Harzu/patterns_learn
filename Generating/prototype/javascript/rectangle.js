const Shape = require('./shape')

class Rectangle extends Shape {
  constructor(params) {
    super(params)
    if (params) {
      this.width = params.width
      this.height = params.height
    }
  }

  clone() {
    return new Rectangle(this)
  }

  square() {
    return this.width * this.height
  }

  equals(object) {
    switch (true) {
      case (object.x !== this.x):
        return false
      case (object.y !== this.y):
        return false
      case (object.color !== this.color):
        return false
      case (object.height !== this.height):
        return false
      case (object.width !== this.width):
        return false
      default:
        return true
    }
  }
}

module.exports = Rectangle