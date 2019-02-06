use traits::*;
use osx_store::OSXStore;
use windows_store::WindowsStore;

pub struct Store<T: StoreFactory> {
  platform: String,
  factory: T,
  games: Vec<Box<dyn GameInterface>>,
  apps: Vec<Box<dyn AppInterface>>
}

impl<T> StoreInstance<T> for Store<T> 
  where T: Clone + StoreFactory {
  fn new(platform: &str, factory: T) -> Self {
    Store {
      platform: platform.to_string(),
      factory: factory,
      apps: Vec::new(),
      games: Vec::new()
    }    
  }

  fn getFactory(&self) -> T {
    self.factory.clone()
  }

  fn run(&self, name: &str, type_id: &str) {
    let gamesVec = &self.games;
    let appsVec = &self.apps;
    
    match type_id {
      "game" => {
        for targetGame in gamesVec {
          let game_instance: &dyn GameInterface = &**targetGame;
          let info = game_instance.getInfo();
          if (info.0 == name) {
            game_instance.play();
          }
        }
      },
      "app" => {
        for targetApp in appsVec {
          let app_instance: &dyn AppInterface = &**targetApp;
          let info = app_instance.getInfo();
          if (info.0 == name) {
            app_instance.start();
          }
        }
      },
      _ => panic!("Not know this type")
    };
  }

  fn join_game(&mut self, name: &str) {
    let game = self.factory.createGame(name);
    self.games.push(game);
  }

  fn join_app(&mut self, name: &str) {
    let app = self.factory.createApp(name);
    self.apps.push(app);
  }

  fn print_inform(&self, name: &str, type_id: &str) {
    if (type_id == "game") {
      let game: &dyn GameInterface = &*self.factory.createGame(name);
      game.printInformation();
    }

    if (type_id == "app") {
      let app: &dyn AppInterface = &*self.factory.createApp(name);
      app.printInformation();
    }
  }
}
