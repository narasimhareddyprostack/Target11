//ES5
//create Express App
const express = require("express");
const app = express();

// Configuration Setting
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Testing or Debugging purpose - logger
const morgan = require("morgan");

//create root Requirest  example: localhost:8000/
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT;
const db_url = process.env.MONGO_DB_LOCAL_URL;

app.use(morgan("dev"));

// Reading form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1> Pro Cart Application</h1>");
});

app.use("/user", require("./router/userRouter"));
app.use("/product", require("./router/productRouter"));
mongoose
  .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((response) => {
    console.log("Mongo DB - Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server Running on Post Number ... ${PORT}`);
});
