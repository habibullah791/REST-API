import express from "express";
import bodyParser from "body-parser";

import userRoutes from './routes/user.js'


const app = express(); // initialize express app
const PORT = 5000; // port

app.use(bodyParser.json()); // initialize the bodyparser


app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server Running on port : http://localhost:${PORT}`);
    });