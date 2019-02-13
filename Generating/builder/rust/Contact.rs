#[derive(Debug)]
pub struct Contact {
  full_name: String,
  phone_number: String
}

pub trait ContactInterface {
  fn new(full_name: String, phone_number: String) -> Self;
  fn call_phone(&self);
  fn get_contact_info(&self) -> (String, String);
}

impl ContactInterface for Contact {
  fn new(full_name: String, phone_number: String) -> Self {
    Contact {
      full_name: full_name,
      phone_number: phone_number
    }
  }

  fn call_phone(&self) {
    println!("Call to {} on {}", self.full_name, self.phone_number);
  }

  fn get_contact_info(&self) -> (String, String) {
    (self.full_name.clone(), self.phone_number.clone())
  }
}

