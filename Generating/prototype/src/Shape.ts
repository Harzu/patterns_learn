import { ShapeParams, IShape } from './interfaces'

export default abstract class Shape implements IShape {
  protected x: number
  protected y: number
  protected color: string

  constructor(params: ShapeParams) {
    this.x = params.x
    this.y = params.y
    this.color = params.color
  }
  
  abstract clone(): any
  abstract square(): number
  abstract deepEquals(otherInstance: any): boolean
  
  getX(): number { return this.x }
  getY(): number { return this.y }
  getColor(): string { return this.color }
}