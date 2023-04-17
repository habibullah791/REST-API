import express from "express";
import bodyParser from "body-parser";


const app = express(); // initialize express app
const PORT = 5000; // port

app.use(bodyParser.json()); // initialize the bodyparser

app.listen(PORT, () => {
    console.log(`Server Running on port : http://localhost:${PORT}`);
    });