import { IPerson, Human } from './interfaces'

let person = null

class Person implements IPerson {
  private human: Human
  constructor() {
    this.human = { name: 'Ivan', age: 23 }
  }

  setHuman(
    newName: string,
    newAge: number
  ): void {
    if (newName && newAge) {
      this.human.name = newName
      this.human.age = newAge
    }
  }

  getHuman(): Human {
    return this.human
  }
}

export default function newPerson() {
  if (person === null) {
    person = new Person
  }

  return person
}
