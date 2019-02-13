from ContactBuilder import ContactBuilder

builder = ContactBuilder()
builder.setFirstName('Mark')
builder.setLastName('Tven')
builder.setPhone('+7 999 872 82 82')
instance = builder.build()

instance.callPhone()