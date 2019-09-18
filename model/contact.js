const mongoose = require('mongoose')
const schema = mongoose.Schema

ContactSchema = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: {
        type: String, required: true

    }
})
module.exports = Contact = mongoose.model('contact', ContactSchema)
