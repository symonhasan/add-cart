const express = require('express');
const productController = require('../controller/product');

const router = express.Router();

router.post('/add-cart' , productController.fetchProduct )

router.get('/' , productController.getProducts);



module.exports = router;
