import {
  IContact,
  ContactInfo,
  ContactParams
} from './interfaces'

export class Contact implements IContact {
  private readonly contactName: string
  private readonly contactPhone: string  

  constructor(private params: ContactParams) {
    this.contactName = this.params.fullName
    this.contactPhone = this.params.phoneNumber
  }

  getContactInfo(): ContactInfo {
    return {
      name: this.contactName,
      phone: this.contactPhone
    }
  }

  call() {
    console.log(
      `Call to ${this.contactName} by phone number ${this.contactPhone}`
    )
  }
}
