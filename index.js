import express from 'express';
import bodyParser from 'body-parser';
import allRoutes from "./router.js";
import { readFile } from "fs/promises";
const config = JSON.parse(await readFile("./config/dev.json"));

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
app.listen(config.app.port, () => console.log("Server is running...."));

