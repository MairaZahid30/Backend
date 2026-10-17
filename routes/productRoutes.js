import express from 'express'
import {getAllProduct} from '../controllers/productController.js'

const routes = express.Router()


routes.get('/products', getAllProduct)


export default routes