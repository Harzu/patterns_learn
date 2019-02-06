use traits::*;

#[derive(Debug, Clone)]
struct WindowsGame {
  name: String,
  type_id: String
}

#[derive(Debug, Clone)]
struct WindowsApp {
  name: String,
  type_id: String,
  price: i32
}

#[derive(Debug, Clone)]
pub struct WindowsStore;
impl StoreFactory for WindowsStore {
  fn createGame(&self, name: &str) -> Box<dyn GameInterface> {
    Box::new(WindowsGame::new(name, "game"))
  }

  fn createApp(&self, name: &str) -> Box<dyn AppInterface> {
    Box::new(WindowsApp::new(name, "app"))
  }
}

impl WindowsApp {
  fn new(name: &str, type_id: &str) -> Self {
    WindowsApp {
      name: name.to_string(),
      type_id: type_id.to_string(),
      price: 10
    }
  }
}

impl WindowsGame {
  fn new(name: &str, type_id: &str) -> Self {
    WindowsGame {
      name: name.to_string(),
      type_id: type_id.to_string()
    }
  }
}

impl GameInterface for WindowsGame {
  fn play(&self) {
    println!("Game {} is started", self.name);
  }

  fn getInfo(&self) -> (String, String) {
    (self.name.to_string(), self.type_id.to_string())
  }

  fn printInformation(&self) {
    println!("
      \rPLATFORM:  Windows
      \rGAME NAME: {}
      \rTYPE:      {}
    ", self.name, self.type_id);
  }
}

impl AppInterface for WindowsApp {
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

    println!("App {} purchased for Windows written off {}$", self.name, self.price);
    true
  }

  fn getInfo(&self) -> (String, String, i32) {
    (self.name.to_string(), self.type_id.to_string(), self.price)
  }

  fn printInformation(&self) {
    println!("
      \rPLATFORM: Windows
      \rAPP NAME: {}
      \rTYPE:     {}
    ", self.name, self.type_id)
  }
}
