const express = require('express');
const app = express();
const colors = require('colors');
const connectDB = require('./db/connection');
const dotenv = require('dotenv');


// dotenv
dotenv.config();

// middleware
app.use(express.json());

// Router controllers
const tasks = require('./routes/tasks')

// Routes
app.get("/", (req, res) => {
    res.send('task manager works');
});

app.use('/api/v1/tasks', tasks);

const PORT = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));
    } catch (err) {
        console.log(err);
    }
}

start();


