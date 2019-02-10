import { ContactParams, ContactInterface } from './interfaces'

export class Contact implements ContactInterface {
  private params: ContactParams
  private contactName: string
  private contactPhone: string  

  constructor(params: ContactParams) {
    this.params = params
    this.contactName = this.params.fullName
    this.contactPhone = this.params.phoneNumber
  }

  getContactInfo(): {
    contactName: string,
    contactPhone: string
  } {
    const { contactName, contactPhone } = this
    return { contactName, contactPhone }
  }

  phoneCall(): void {
    console.log(`Call to ${this.contactName} by phone number ${this.contactPhone}`)
  }
}
