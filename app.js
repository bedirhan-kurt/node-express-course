require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const tasks = require('./routes/tasks');

app.get('/', (req, res) => {
    res.send('Task Manager API');
})

app.use(express.json());

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(error + '\nFailed to connect to the database');
    }
}

start()