const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')


const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");


dotenv.config();


app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(8800);

  })
  .catch((err) => {
    console.error(err);
  });