const express = require("express");
const router = express.Router();
const { getAuth, createAuth } = require("../controllers/authControllers");

router.route("/").get(getAuth);
router.route("/").post(createAuth);

module.exports = router;