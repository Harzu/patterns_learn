mod traits;
mod configuration;
mod ethereum_market;
mod bitcoin_market;

use traits::*;
use configuration::*;
use bitcoin_market::{ Bitcoin, BitcoinFactory };
use ethereum_market::{ Ethereum, EthereumFactory };

fn market_factory(name: &str, config: &Configuration) -> Box<dyn CoinInstance> {
  match name {
    "bitcoin" => Box::new(Bitcoin::new(&config.bitcoin)),
    "ethereum" => Box::new(Ethereum::new(&config.ethereum)),
    _ => panic!("Not coin name")
  }
}

fn main() {
  let config = Configuration::new();
  
  let bitcoin_instance: &dyn CoinInstance = &*market_factory("bitcoin", &config);
  dbg!(bitcoin_instance.get_name());
  dbg!(bitcoin_instance.get_balance());
  dbg!(bitcoin_instance.get_network());

  let ethereum_instance: &dyn CoinInstance = &*market_factory("ethereum", &config);
  dbg!(ethereum_instance.get_name());
  dbg!(ethereum_instance.get_balance());
  dbg!(ethereum_instance.get_network());
}