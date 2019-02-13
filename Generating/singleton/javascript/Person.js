class Person {
  constructor() {
    this.human = {
      name: 'Ivan',
      age: 23
    }
  }

  setHuman(name, age) {
    this.human.name = name || 'ivan'
    this.human.age = age || 23
  }

  getHuman() {
    return this.human
  }
}

let person = null
function getInstance(params = null) {
  if (person === null) {
    person = new Person(params)
  }

  return person
}

module.exports.getInstance = getInstance