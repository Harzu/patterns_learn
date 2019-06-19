export interface ShapeParams {
  x: number
  y: number
  color: string
}

export interface CircleParams extends ShapeParams {
  radius: number
}

export interface RectangleParams extends ShapeParams {
  width: number
  height: number
}

export interface IShape {
  getX(): number
  getY(): number
  getColor(): string
  
  // Non implemented abstract methods
  clone(): any
  square(): number
  deepEquals(otherInstance: any): boolean
}

export interface ICircle extends IShape {
  getRadius(): number
}

export interface IRectangle extends IShape {
  getWidth(): number
  getHeight(): number
}