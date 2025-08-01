require('dotenv').config()

const connectDB = require('./db/connect')
const ProductsModel = require('./models/productsModel')

const productsData = require('./productsData.json')

const populateData = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        await ProductsModel.deleteMany()
        await ProductsModel.create(productsData)

        console.log('Products data successfully populated in database.')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

populateData()