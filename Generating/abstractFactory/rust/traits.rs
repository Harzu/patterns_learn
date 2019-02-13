pub trait GameInterface {
  fn play(&self);
  fn getInfo(&self) -> (String, String);
  fn printInformation(&self);
}

pub trait AppInterface {
  fn start(&self);
  fn getInfo(&self) -> (String, String, i32);
  fn buyApp(&self, deposit: i32) -> bool;
  fn printInformation(&self);
}

pub trait StoreInstance<T> {
  fn new(platform: &str, factory: T) -> Self;
  fn getFactory(&self) -> T;
  fn run(&self, name: &str, type_id: &str);
  fn join_app(&mut self, name: &str);
  fn join_game(&mut self, name: &str);
  fn print_inform(&self, name: &str, type_id: &str);
}

pub trait StoreFactory {
  fn createApp(&self, name: &str) -> Box<dyn AppInterface>;
  fn createGame(&self, name: &str) -> Box<dyn GameInterface>;
}