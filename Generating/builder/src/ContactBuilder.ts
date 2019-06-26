import { Contact } from './Contact'
import { IBuilder, IContact } from './interfaces'

export class ContactBuilder implements IBuilder {  
  public firstName: string
  public lastName: string
  public phoneNumber: string

  setFirstName(name: string): IBuilder {
    this.firstName = name
    return this
  }

  setLastName(name: string): IBuilder {
    this.lastName = name
    return this
  }

  setPhoneNumber(phone: string): IBuilder {
    this.phoneNumber = phone
    return this
  }

  finally(): IContact {
    if (!this.firstName || !this.lastName || !this.phoneNumber) {
      throw new Error('Not all params for create')
    }

    return new Contact({
      fullName: `${this.firstName} ${this.lastName}`,
      phoneNumber: this.phoneNumber
    })
  }
}