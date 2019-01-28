class Shape {
  constructor(params) {
    if (params) {
      this.x = params.x
      this.y = params.y
      this.color = params.color
    }
  }
}

module.exports = Shape