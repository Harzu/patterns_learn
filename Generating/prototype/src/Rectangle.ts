import Shape from './Shape'
import { IRectangle, RectangleParams } from './interfaces'

export default class Rectangle extends Shape implements IRectangle {
  private width: number
  private height: number

  constructor(params: RectangleParams) {
    super(params)

    const { width, height } = params
    this.width = (!width) ? 0 : width
    this.height = (!height) ? 0 : height
  }
  
  getWidth(): number { return this.width }
  getHeight(): number { return this.height }

  clone(): IRectangle { return Object.create(this) }
  square(): number { return this.width * this.height }
  deepEquals(rectangleInstance: IRectangle): boolean {
    switch (true) {
      case (rectangleInstance.getX() !== this.x):
        return false
      case (rectangleInstance.getY() !== this.y):
        return false
      case (rectangleInstance.getColor() !== this.color):
        return false
      case (rectangleInstance.getHeight() !== this.height):
        return false
      case (rectangleInstance.getWidth() !== this.width):
        return false
      case (rectangleInstance.square() !== this.square()):
          return false
      default:
        return true
    }
  }
}