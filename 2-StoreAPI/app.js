require('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();

const productsRouter = require('./routes/productsRoutes')
const connectDB = require('./db/connect')

const errorHandlerMiddleware = require('./middleware/errorHandler');
const notFoundMiddleware = require('./middleware/notFound');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log('Server is listening on port 3000...');
        });
    } catch (error) {
        console.error(error);
    }
}

start();