#[warn(unused_imports)]
mod traits;
mod store;
mod osx_store;
mod windows_store;

use std::env;
use store::Store;
use traits::*;
use osx_store::OSXStore;
use windows_store::WindowsStore;

fn main() {
  let input_args: Vec<String> = env::args().collect();
  if (input_args.len() < 2) { panic!("not required argument"); }
  let platform  = &input_args[1];

  if (platform == "windows") {
    let mut win_store = Store::new("windows", WindowsStore);
    win_store.print_inform("Beast battle 2", "game");
    win_store.join_game("Beast battle 2");
    win_store.run("Beast battle 2", "game");
  }

  if (platform == "osx") {
    let mut osx_store = Store::new("osx", OSXStore);
    osx_store.print_inform("Itunes", "app");
    osx_store.join_app("Itunes");
    osx_store.run("Itunes", "app");
  }
}