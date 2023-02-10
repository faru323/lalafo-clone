const express = require("express");
const app = express();
const PORT = 8080;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
require("./routes/cards")(app);
require("./routes/users")(app);
dotenv.config();

mongoose.set("strictQuery", false);
const dbUri = process.env.DB_URI;
mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
