import { Contact } from './Contact'
import { BuilderInterface } from './interfaces'

export class ContactBuilder implements BuilderInterface {  
  firstName: string
  lastName: string
  phoneNumber: string

  setFirstName(name: string): BuilderInterface {
    this.firstName = name
    return (this as BuilderInterface)
  }

  setLastName(name: string): BuilderInterface {
    this.lastName = name
    return (this as BuilderInterface)
  }

  setPhoneNumber(phone: string): BuilderInterface {
    this.phoneNumber = phone
    return (this as BuilderInterface)  
  }

  finally(): Contact {
    if (!this.firstName || !this.lastName || !this.phoneNumber) {
      throw new Error('Not all params for create')
    }

    return new Contact({
      fullName: `${this.firstName} ${this.lastName}`,
      phoneNumber: this.phoneNumber
    })
  }
}