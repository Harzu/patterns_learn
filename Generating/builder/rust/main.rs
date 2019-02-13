mod Contact;
mod ContactBuilder;

use Contact::ContactInterface;
use ContactBuilder::{ ContactBuilder as Builder, ContactBuilderInterface };

fn main() {
  let mut builder = Builder::new();
  let instance = builder
    .set_first_name("Mark")
    .set_last_name("Tven")
    .set_phone_number("+7 999 872 82 82")
    .build();

  instance.call_phone();
}