const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");
const Auth = require("../models/authModal")
//@desc get all contact
//@route get /api/contacts
//@access punlic

const getAuth = asyncHandler(async (req, res) => {
    const auth = await Auth.find();
    res.status(200).json(auth)
});



// autocounter

const counterSchema = {
    id: {
        type: String
    },
    seq: {
        type: Number
    }
}

const counterModel = mongoose.model("counter", counterSchema);


// app.post("/post", (req, res) => {
//     counterModel.findByIdAndUpdate(
//         { id: "autoval" },
//         { "$inc": { "seq": 1 } },
//         { new: true }, (err, cd) => {
//             let seqId;
//             if (cd == null) {
//                 const newval = new counterModel({ id: "autoval", seq: 1 })
//                 newval.save()
//                 seqId = 1
//             } else {
//                 seq = cd.seq
//             }
//         }
//     )
// })


//@desc create new contacts
//@route Post /api/contacts
//@access punlic

const createAuth = asyncHandler(async (req, res) => {
    console.log("the request body is :", req.body)
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All field required")
    }
    const auth = await Auth.create({
        email,
        password,
        // id: seqId
    })
    res.status(201).json(auth)
});




module.exports = { getAuth, createAuth };