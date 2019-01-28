use shape::*;

#[derive(Debug, Clone)]
pub struct Rectangle {
  shape: Shape,
  width: i32,
  height: i32
}

pub trait RectangleTrait {
  fn new() -> Self;
  fn new_with_params(width: i32, height: i32, x: i32, y: i32, color: &str) -> Self;
  fn set_width(&mut self, new_width: i32);
  fn set_height(&mut self, new_height: i32);
  fn get_rectangle(&self) -> (Shape, i32, i32);
  fn square(&self) -> i32;
  fn equals(&self, target_object: Rectangle) -> bool;
}

impl RectangleTrait for Rectangle {
  fn new() -> Self {
    Rectangle {
      shape: Shape { x: 0, y: 0, color: "".to_string() },
      width: 0,
      height: 0
    }
  }

  fn new_with_params(width: i32, height: i32, x: i32, y: i32, color: &str) -> Self {
    Rectangle {
      shape: Shape { x: x, y: y, color: color.to_string() },
      width: width,
      height: height
    }
  }

  fn set_width(&mut self, new_width: i32) {
    self.width = new_width;
  }

  fn set_height(&mut self, new_height: i32) {
    self.height = new_height;
  }

  fn get_rectangle(&self) -> (Shape, i32, i32) {
    (self.shape.clone(), self.height, self.width)
  }

  fn square(&self) -> i32 {
    self.width * self.height
  }

  fn equals(&self, target_object: Rectangle) -> bool {
    match target_object {
      _ if target_object.width != self.width => false,
      _ if target_object.height != self.height => false,
      _ if target_object.shape.x != self.shape.x => false,
      _ if target_object.shape.y != self.shape.y => false,
      _ if target_object.shape.color != self.shape.color => false,
      _ => true
    }
  }
}

impl ShapeTrait for Rectangle {
  fn clone_instance(&self) -> Self {
    self.clone()
  }

  fn set_x(&mut self, x: i32) {
    self.shape.x = x;
  }

  fn set_y(&mut self, y: i32) {
    self.shape.y = y;
  }

  fn set_color(&mut self, color: &str) {
    self.shape.color = color.to_string()
  }
}
