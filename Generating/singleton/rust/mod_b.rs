use person;
pub fn print_person_b() {
  unsafe {
    println!("{:?}", person::PERSON.getPerson())
  }
}
