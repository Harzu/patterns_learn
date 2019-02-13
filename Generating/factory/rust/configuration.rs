#[derive(Debug, Clone)]
pub struct BitcoinConfig<'a> {
  network: &'a str
}

#[derive(Debug, Clone)]
pub struct EthereumConfig<'a> {
  network: &'a str,
  gas_limit: i32,
  gas_price: i32
}

pub trait BTCConfig {
  fn new() -> Self;
  fn get_network(&self) -> String;
  fn get_config(&self) -> Self;
}

pub trait ETHConfig {
  fn new() -> Self;
  fn get_network(&self) -> String;
  fn get_config(&self) -> Self;
}

impl<'a> BTCConfig for BitcoinConfig<'a> {
  fn new() -> Self { BitcoinConfig { network: "testnet" } }
  fn get_network(&self) -> String {
    self.network.to_string()
  }
  fn get_config(&self) -> Self {
    self.clone()
  }
}

impl<'a> ETHConfig for EthereumConfig<'a> {
  fn new() -> Self {
    EthereumConfig {
      network: "local",
      gas_limit: 64000,
      gas_price: 1000
    }
  }

  fn get_network(&self) -> String {
    self.network.to_string()
  }

  fn get_config(&self) -> Self {
    self.clone()
  }
}

#[derive(Debug)]
pub struct Configuration<'a> {
  pub bitcoin: BitcoinConfig<'a>,
  pub ethereum: EthereumConfig<'a>
}

impl<'a> Configuration<'a> {
  pub fn new() -> Self {
    Configuration {
      bitcoin: BitcoinConfig::new(),
      ethereum: EthereumConfig::new()
    }
  }
}