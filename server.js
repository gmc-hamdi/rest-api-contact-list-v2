const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

// Body Parser
app.use(express.json());
mongoose
  .connect(config.get("mongoURI"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongoDB connected ..."))
  .catch(err => console.log(err));

app.use(require("./routes/contact"));

const port = process.env.PORT || 4000;
app.listen(port, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 5000");
});
