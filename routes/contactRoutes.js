const express = require("express");
const router = express.Router();
const {getContacts, getContact, updateContact, createContact, deleteContact} = require("../controllers/contactControllers");
const multer = require("multer");


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   });
  
//   const upload = multer({ storage: storage }).single("avatar");
var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './uploads');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  
  var upload = multer({ storage : storage}).single('avatar');  

router.route("/").get(getContacts).post(upload, createContact);


router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


// router.route("/").get(getContacts);

// router.route("/").post(createContact)

// router.route("/:id").get(getContact)

// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)

// router.route("/").get((req, res) => {
//     res.status(200).json({message: "get all contacts"})
// })



// router.route("/:id").delete((req, res) => {
//     res.status(200).json({message: `delete contacts ${req.params.id}`})
// })

module.exports = router;