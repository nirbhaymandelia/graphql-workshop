const express = require('express');
const { createOrder, fetchAllOrder, fetchOrderById } = require('../controllers');
const router = express.Router();

router.post('/order', createOrder);
router.get('/orders', fetchAllOrder);
router.get('/order/:id', fetchOrderById);

module.exports = router;
