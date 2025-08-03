require('dotenv').config();
require('express-async-errors')

const express = require('express');
const app = express();

const authRoutes = require('./routes/authRoutes')

const errorHandlerMiddleware = require('./middleware/errorHandler');
const notFoundMiddleware = require('./middleware/notFound');

app.use(express.json());

app.use('/api/v1/auth', authRoutes)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log('Server is listening on port 3000...');
        });
    } catch (error) {
        console.error(error);
    }
}

start();