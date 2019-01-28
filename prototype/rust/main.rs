mod shape;
mod circle;
mod rectangle;

use shape::*;
use circle::*;
use rectangle::*;

fn main() {
  let mut circle_struct = Circle::new();
  circle_struct.set_x(5);
  circle_struct.set_y(5);
  circle_struct.set_color("red");
  circle_struct.set_radius(10);
  let circle_clone = circle_struct.clone_instance();

  println!("
    Circle
    \rinstance: {:?}
    \rclone:    {:?}
    \rsquare: {}
    \requals: {}
  ", 
  circle_struct.get_circle(),
  circle_clone.get_circle(),
  circle_clone.square(),
  circle_struct.equals(circle_clone)
  );

  let mut rectangle_struct = Rectangle::new();
  rectangle_struct.set_width(100);
  rectangle_struct.set_height(200);
  let rectangle_clone = rectangle_struct.clone_instance();

  println!("
    Rectangle
    \rinstance: {:?}
    \rclone:    {:?}
    \rsquare: {}
    \requals: {}
  ", 
  rectangle_struct.get_rectangle(),
  rectangle_clone.get_rectangle(),
  rectangle_clone.square(),
  rectangle_struct.equals(rectangle_clone)
  );
}