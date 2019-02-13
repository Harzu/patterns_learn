pub trait CoinInstance {
  fn get_name(&self) -> String;
  fn get_balance(&self) -> i32;
  fn get_network(&self) -> String;
  fn set_balance(&mut self, new_balance: i32);
}
