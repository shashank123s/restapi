const express = require("express");
const { getUser, getUsers, createUser } = require("../controllers/userDetailsControllers");
const router = express.Router();


router.route("/").get(getUsers).post(createUser);


router.route("/:id").get(getUser);

module.exports = router;