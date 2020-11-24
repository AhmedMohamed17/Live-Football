const mongoose = require("mongoose");
const cors = require("cors");
const matches = require("./routes/matches");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/football")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(cors());
app.use(express.json());
app.use("/api/matches", matches);
const port = 5000 || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
