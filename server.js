require("./config/db");
const userRouter = require("./routes/users");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(express.urlencoded("extended: false"));
// app.use(express.json());
app.use(userRouter);

app.listen(port, () => console.log(`Server is listening port ${port}`));
