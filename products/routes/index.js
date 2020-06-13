const express = require('express');
const {fetchAllProduct,fetchProductsById, addProduct} = require('../controllers');
const router = express.Router();

router.post('/product', addProduct);
router.get('/products', fetchAllProduct);
router.get('/product/:id', fetchProductsById);

module.exports = router;
