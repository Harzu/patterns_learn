use Contact::{ Contact, ContactInterface };

#[derive(Debug, Clone)]
pub struct ContactBuilder {
  first_name: String,
  last_name: String,
  phone_number: String
}

pub trait ContactBuilderInterface {
  fn new() -> Self;
  fn set_first_name(&mut self, new_name: &str) -> Self;
  fn set_last_name(&mut self, new_name: &str) -> Self;
  fn set_phone_number(&mut self, phone_number: &str) -> Self;
  fn build(&self) -> Contact;
}

impl ContactBuilderInterface for ContactBuilder {
  fn new() -> Self {
    ContactBuilder {
      first_name: "".to_string(),
      last_name: "".to_string(),
      phone_number: "".to_string()
    }
  }

  fn set_first_name(&mut self, new_name: &str) -> Self {
    self.first_name = new_name.to_string();
    self.clone()
  }

  fn set_last_name(&mut self, new_name: &str) -> Self {
    self.last_name = new_name.to_string();
    self.clone()
  }

  fn set_phone_number(&mut self, phone_number: &str) -> Self {
    self.phone_number = phone_number.to_string();
    self.clone()
  }

  fn build(&self) -> Contact {
    Contact::new(format!("{} {}", self.first_name, self.last_name), self.phone_number.clone())
  }
}