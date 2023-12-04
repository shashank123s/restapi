const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModal");
const sharp = require("sharp");
const userDetails = require("../models/userDetails");

//@desc get all contact
//@route get /api/contacts
//@access punlic

const getContacts = asyncHandler(async (req, res) => {
  // const data =await Contact.find();
  const data = await Contact.find()
  // .select("name phone")
  // .collation({ locale: "en", strength: 1 })
  // .sort({ name: 1 });
  res.status(200).json({ status: "200", message: "All contacts retrieved successfully", data })
  // console.log("hi", contacts)
});


//@desc get Single contacts
//@route Get /api/contacts
//@access punlic

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  const userData = await userDetails.findOne({ userId: req.params.id });
  // if (!contact && !userData) {
  //   res.status(404).json({
  //     status: 'error',
  //     message: 'Contact or user details not found'
  //   });
  //   return;
  // }

  // const result = [contact, userData];




  // if (!contact) {
  //   res.status(404).json({
  //     status: 'error',
  //     message: 'Contact not found'
  //   });
  //   return;
  // }

  // const result = [];

  // if (contact) {
  //   result.push({ contact });
  // }

  // if (userData) {
  //   result.push({ userData });
  // }





  if (!contact) {
    res.status(404).json({
      status: 'error',
      message: 'Contact not found'
    });
    return;
  }

  // const result = { ...contact._doc, ...userData?._doc };
  const { job, salary, type } = userData || {};

  const result = { ...contact._doc, job, salary, type };
  res.status(200).json({
    status: 'success',
    message: 'Data retrieved successfully',
    data: result
  });
});


//@desc create new contacts
//@route Post /api/contacts
//@access punlic

// const createContact = asyncHandler (async(req, res) => {
//     console.log("the request body is :", req.body)
//     const {name, email, phone} = req.body;
//     if(!name || !email || !phone){
//         res.status(400);
//         throw new Error("All field required")
//     }
//     const contact = await Contact.create({
//         name,
//         email,
//         phone,
//     })
//     res.status(201).json({status:"201", message: "contacts Added successfully", contact })
// });



const createContact = async (req, res) => {
  // console.log(req.file.path)
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    //   const { filename } = req.file;
    //   const { filePath } = req.file.path;
    const webpPath = req.file.path.replace(/\.[^.]+$/, ".webp");
    await sharp(req.file.path).toFormat("webp").toFile(webpPath);
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      // avatar: req.file.path, // Save the filename or file path in your MongoDB document
      avatar: webpPath,
    });
    const savedContact = await contact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};






//@desc Update contacts
//@route Put /api/contacts
//@access punlic

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact)
});


//@desc Delete contacts
//@route Delete /api/contacts
//@access punlic

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  await Contact.deleteOne();
  res.status(200).json(contact);
});



module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };