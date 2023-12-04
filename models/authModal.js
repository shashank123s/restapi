const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    email: {
        type: String,
        require: [true, "please add the  email"]
    },
    password: {
        type: String,
        require: [true, "please add the password"]
    },
    // _id:{
    //     type:Number
    // },
},
    { versionKey: false }
);

module.exports = mongoose.model("Auth", authSchema)