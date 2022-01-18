const express = require("express");
const bodyParser = require('body-parser');
const db = require('./db-connection');
const app = express();


// It parses incoming requests with JSON payloads
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(3000, () => console.log("Server is running on port 3000"));


