use traits::*;
use configuration::*;

#[derive(Debug)]
pub struct Bitcoin {
  name: String,
  balance: i32,
  network: String
}

pub trait BitcoinFactory {
  fn new(config: &BitcoinConfig) -> Self;
}

impl BitcoinFactory for Bitcoin {
  fn new(config: &BitcoinConfig) -> Self {
    Bitcoin {
      name: "Bitcoin".to_string(),
      balance: 0,
      network: config.get_network()
    }
  }
}

impl CoinInstance for Bitcoin {
  fn get_name(&self) -> String {
    self.name.clone()
  }

  fn get_balance(&self) -> i32 {
    self.balance
  }

  fn get_network(&self) -> String {
    self.network.clone()
  }

  fn set_balance(&mut self, new_balance: i32) {
    self.balance = new_balance;
  }
}