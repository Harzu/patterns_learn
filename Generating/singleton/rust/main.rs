mod person {
  #[derive(Debug)]
  pub struct Person<'a> {
    name: &'a str,
    age: i32
  }

  impl<'a> Person<'a> {
    pub fn getPerson(&self) -> (&'a str, i32) {
      (self.name, self.age)
    }

    pub fn setPerson(&mut self, newName: &'a str, newAge: i32) {
      self.name = newName;
      self.age = newAge;
    }
  }

  pub static mut PERSON: Person<'static> = Person { name: "", age: 0 };
}

mod mod_a;
mod mod_b;

fn main() {
  unsafe {
    println!("{:?}", person::PERSON.getPerson());
    mod_a::set_person_a();
    mod_b::print_person_b();
  }
}