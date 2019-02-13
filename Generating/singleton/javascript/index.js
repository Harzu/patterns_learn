const getInstance_a = require('./module_a')
const getInstance_b = require('./module_b')

const person_a = getInstance_a.getInstance()
const person_b = getInstance_b.getInstance()

console.log(person_a, person_b)
person_a.setHuman('Ilya', 25)
console.log(person_a, person_b)
