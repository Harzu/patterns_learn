import { character as Student } from './FirstModule'
import { character as Teacher } from './SecondModule'

Student.setHuman('Ilya', 24)
console.log(Student, Teacher)
Teacher.setHuman('Igor Yourevich', 51)
console.log(Student, Teacher)
