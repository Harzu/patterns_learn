use traits::*;
use configuration::*;

#[derive(Debug)]
pub struct Ethereum {
  name: String,
  balance: i32,
  network: String
}

pub trait EthereumFactory {
  fn new(config: &EthereumConfig) -> Self;
}

impl EthereumFactory for Ethereum {
  fn new(config: &EthereumConfig) -> Self {
    Ethereum {
      name: "Ethereum".to_string(),
      balance: 0,
      network: config.get_network()
    }
  }
}

impl CoinInstance for Ethereum {
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