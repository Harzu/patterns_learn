use std::f32::consts::PI;
use shape::*;

#[derive(Debug, Clone)]
pub struct Circle {
  shape: Shape,
  radius: i32
}

pub trait CircleTrait {
  fn new() -> Self;
  fn new_with_params(radius: i32, x: i32, y: i32, color: &str) -> Self;
  fn set_radius(&mut self, radius: i32);
  fn get_circle(&self) -> (Shape, i32);
  fn square(&self) -> f32;
  fn equals(&self, target_object: Circle) -> bool;
}

impl CircleTrait for Circle {
  fn new() -> Self {
    Circle {
      shape: Shape { x: 0, y: 0, color: "".to_string() },
      radius: 0
    }
  }

  fn new_with_params(radius: i32, x: i32, y: i32, color: &str) -> Self {
    Circle {
      shape: Shape { x: x, y: y, color: color.to_string() },
      radius
    }
  }

  fn square(&self) -> f32 {
    PI * (self.radius * self.radius) as f32
  }

  fn equals(&self, taarget_object: Circle) -> bool {
    let match_result = match taarget_object {
      _ if taarget_object.radius != self.radius => false,
      _ if taarget_object.shape.x != self.shape.x => false,
      _ if taarget_object.shape.y != self.shape.y => false,
      _ if taarget_object.shape.color != self.shape.color => false,
      _ => true
    };

    match_result
  }

  // Setters
  fn set_radius(&mut self, radius: i32) {
    self.radius = radius
  }

  // Getters
  fn get_circle(&self) -> (Shape, i32) {
    (self.shape.clone(), self.radius)
  }
}

impl ShapeTrait for Circle {
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
