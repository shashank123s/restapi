const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const path = require("path");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

console.log("on hai server")
// app.get("/api/contacts", (req, res) => {
//     res.status(200).json({message:"get all contacts"})
// })

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userDetailsRoutes"));
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


console.log("helllo sir")
// console.log("How are you")