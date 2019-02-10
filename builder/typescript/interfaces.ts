export interface ContactParams {
  fullName: string
  phoneNumber: string
}

export interface ContactInterface {
  phoneCall(): void
  getContactInfo(): { contactName: string, contactPhone: string }
}

export interface BuilderInterface {
  setFirstName(name: string): BuilderInterface
  setLastName(name: string): BuilderInterface
  setPhoneNumber(phone: string): BuilderInterface
  finally(): ContactInterface
}