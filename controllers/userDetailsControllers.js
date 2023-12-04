const asyncHandler = require("express-async-handler");
const userDetails = require("../models/userDetails");


const getUsers =asyncHandler (async (req, res) => {
    // const data =await Contact.find();
    const data =await userDetails.find()
    // .select("name phone")
    // .collation({ locale: "en", strength: 1 })
    // .sort({ name: 1 });
    res.status(200).json({status:"200", message: "All user details successfully", data })
    // console.log("hi", contacts)
}) ;

const getUser = asyncHandler (async (req, res) => {
    const data = await userDetails.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(data)
});

const createUser = asyncHandler (async(req, res) => {
    console.log("the request body is :", req.body)
    const {userId, job, salary, type} = req.body;
    if(!userId || !job || !salary || !type){
        res.status(400);
        throw new Error("All field required")
    }
    const data = await userDetails.create({
        userId,
        job,
        salary,
        type,
    })
    res.status(201).json({status:"201", message: "user Details Added successfully", data })
});




// const updateContact =asyncHandler (async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     if(!contact){
//         res.status(404);
//         throw new Error("contact not found");
//     }

// const updatedContact = await Contact.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true }
// );

//     res.status(200).json(updatedContact)
// }); 



// const deleteContact = asyncHandler (async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     if(!contact){
//         res.status(404);
//         throw new Error("contact not found");
//     }
// await Contact.deleteOne();
//     res.status(200).json(contact);
// });



module.exports = {getUser, getUsers, createUser };