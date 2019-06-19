import Shape from './Shape'
import { CircleParams, ICircle } from './interfaces'

export default class Circle extends Shape implements ICircle {
  private radius: number
  
  constructor(params: CircleParams) {
    super(params)
    this.radius = (!params.radius) ? 0 : params.radius
  }

  getRadius(): number { return this.radius }
  
  clone(): ICircle { return Object.create(this) }
  square(): number { return Math.PI * Math.pow(this.radius, 2) }
  deepEquals(circleInstance: ICircle): boolean {
    switch (true) {
      case (circleInstance.getX() !== this.x):
        return false
      case (circleInstance.getY() !== this.y):
        return false
      case (circleInstance.square() !== this.square()):
        return false
      case (circleInstance.getColor() !== this.color):
        return false
      default:
        return true
    }
  }
}