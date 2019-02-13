pub struct Target {
  message: String
}

pub struct DifferentTarget {
  message: String
}

pub struct TargetAdapter {
  adaptee: DifferentTarget
}

pub trait TargetInterface {
  fn get_message(&self) -> String;
}

pub trait DifferentTargetInterface {
  fn new() -> Self;
  fn get_different_message(&self) -> String;
}

pub trait TargetAdapterInterface {
  fn new(adaptee: DifferentTarget) -> Self;
}

impl Target {
  pub fn new() -> Self {
    Target {
      message: "My First message".to_string()
    }
  }
}

impl TargetInterface for Target {
  fn get_message(&self) -> String {
    self.message.clone()
  }
}

impl DifferentTargetInterface for DifferentTarget {
  fn new() -> Self {
    DifferentTarget {
      message: "egassem desreveR".to_string()
    }
  }

  fn get_different_message(&self) -> String {
    self.message.clone()
  }
}

impl TargetAdapterInterface for TargetAdapter {
  fn new(adaptee: DifferentTarget) -> Self {
    TargetAdapter {
      adaptee: adaptee
    }
  }
}

impl TargetInterface for TargetAdapter {
  fn get_message(&self) -> String {
    let message = self.adaptee.get_different_message();
    
    message
      .chars()
      .rev()
      .collect::<String>()
  }
}