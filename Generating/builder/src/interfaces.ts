export interface ContactParams {
  fullName: string
  phoneNumber: string
}

export interface ContactInfo {
  name: string
  phone: string
}

export interface IContact {
  call(): void
  getContactInfo(): ContactInfo
}

export interface IBuilder {
  setFirstName(firstName: string): IBuilder
  setLastName(lastName: string): IBuilder
  setPhoneNumber(phone: string): IBuilder
  finally(): IContact
}