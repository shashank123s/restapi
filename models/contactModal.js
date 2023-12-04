const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "please add the contact name"]
    },
    email: {
        type: String,
        require: [true, "please add the contact email"]
    },
    phone: {
        type: String,
        require: [true, "please add the contact / phone number"]
    },
    avatar: {
        type: String,
    },
},
    {
        timestamps: true,
    },
    // { versionKey: false }
    );

module.exports = mongoose.model("Contact", contactSchema)