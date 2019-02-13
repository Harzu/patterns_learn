use person;
pub fn set_person_a() {
  unsafe {
    person::PERSON.setPerson("Ilya", 32);
  }
}
