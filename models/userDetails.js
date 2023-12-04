const mongoose = require("mongoose");

const userDetailsSchema = mongoose.Schema({
    userId: {
        type: String,
        require: [true, "please add user Id"]
    },
    job: {
        type: String,
        require: [true, "please add the Job name"]
    },
    salary: {
        type: String,
        require: [true, "please add the salary"]
    },
    type: {
        type: String,
        require: [true, "please add  type"]
    },
},
{ versionKey: false });

module.exports = mongoose.model("UserDetails", userDetailsSchema)