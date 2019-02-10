import { ContactBuilder } from './ContactBuilder'

const builder = new ContactBuilder
const newContact = builder
  .setFirstName('Mark')
  .setLastName('Tven')
  .setPhoneNumber('+7 999 872 82 82')
  .finally()

newContact.phoneCall()
