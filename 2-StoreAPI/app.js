require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./db/connect')

const errorHandlerMiddleware = require('./middleware/errorHandler');
const notFoundMiddleware = require('./middleware/notFound');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // Connect to the database
        // await connectDB(process.env.MONGO_URI);
        app.listen(3000, () => {
            console.log('Server is listening on port 3000...');
        });
    } catch (error) {
        console.error(error);
    }
}

start();