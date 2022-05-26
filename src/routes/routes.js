const express = require('express');
const { userLogin } = require('../controllers/loginController');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController')
const router = express.Router();

const {createUser, getUser, updateUser} = require("../controllers/userController")
// const {userLogin} = require('../controllers/loginController')
const {userAuthentication} = require("../middleware/authentication")


//User API Routes
router.post('/register', createUser)
router.post('/login', userLogin)
router.get('/user/:userId/profile', userAuthentication, getUser)
router.put('/user/:userId/profile', userAuthentication, updateUser)

//Product API Routes
router.post('/products', createProduct)
router.get('/products', getProducts)
router.get('/products/:productId', getProducts)
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId',deleteProduct)

//Cart Api Routers
// router.post('/users/:userId/cart', userAuthentication, createCart)

module.exports = router