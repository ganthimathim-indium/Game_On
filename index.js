const express = require("express");
const bodyParser = require('body-parser');
const allRoutes = require("./router");
const app = express();


// It parses incoming requests with JSON payloads
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Applying All Routes
app.use(allRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));

