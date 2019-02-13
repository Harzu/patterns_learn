#[derive(Debug, Clone)]
pub struct Shape {
  pub x: i32,
  pub y: i32,
  pub color: String
}

pub trait ShapeTrait {
  fn clone_instance(&self) -> Self;
  fn set_x(&mut self, x: i32);
  fn set_y(&mut self, x: i32);
  fn set_color(&mut self, color: &str);
}