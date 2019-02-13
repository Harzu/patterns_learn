use traits::*;

#[derive(Debug, Clone)]
struct OSXGame {
  name: String,
  type_id: String
}

#[derive(Debug, Clone)]
struct OSXApp {
  name: String,
  type_id: String,
  price: i32
}

#[derive(Debug, Clone)]
pub struct OSXStore;
impl StoreFactory for OSXStore {
  fn createGame(&self, name: &str) -> Box<dyn GameInterface> {
    Box::new(OSXGame::new(name, "game"))
  }

  fn createApp(&self, name: &str) -> Box<dyn AppInterface> {
    Box::new(OSXApp::new(name, "app"))
  }
}

impl OSXGame {
  fn new(name: &str, type_id: &str) -> Self {
    OSXGame {
      name: name.to_string(),
      type_id: type_id.to_string()
    }
  }
}

impl OSXApp {
  fn new(name: &str, type_id: &str) -> Self {
    OSXApp {
      name: name.to_string(),
      type_id: type_id.to_string(),
      price: 10
    }
  }
}

impl GameInterface for OSXGame {
  fn play(&self) {
    println!("Game {} is started", self.name);
  }

  fn getInfo(&self) -> (String, String) {
    (self.name.to_string(), self.type_id.to_string())
  }

  fn printInformation(&self) {
    println!("
      \rPLATFORM:  OSX
      \rGAME NAME: {}
      \rTYPE:      {}
    ", self.name, self.type_id);
  }
}

impl AppInterface for OSXApp {
  fn start(&self) {
    println!("App {} is started", self.name);
  }

  fn buyApp(&self, deposit: i32) -> bool {
    let targetDeposit = &deposit;
    if targetDeposit != &self.price {
      panic!("
        \rDeposit less price
        \rDEPOSIT: {}
        \rPRICE:   {}
      ", targetDeposit, self.price)
    }

    println!("App {} purchased for OSX written off {}$", self.name, self.price);
    true
  }

  fn getInfo(&self) -> (String, String, i32) {
    (self.name.to_string(), self.type_id.to_string(), self.price)
  }

  fn printInformation(&self) {
    println!("
      \rPLATFORM: OSX
      \rAPP NAME: {}
      \rTYPE:     {}
    ", self.name, self.type_id)
  }
}
