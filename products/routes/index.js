const express = require('express');
const { fetchAllProduct, fetchProductById, addProduct } = require('../controllers');
const router = express.Router();

router.post('/product', addProduct);
router.get('/products', fetchAllProduct);
router.get('/product/:id', fetchProductById);

module.exports = router;
