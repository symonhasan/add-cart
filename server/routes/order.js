const express = require('express');
const orderController = require('../controller/order');

const router = express.Router();

router.post('/place-order' , orderController.placeOrder )

module.exports = router;