const express = require('express');
const {fetchAllProduct,fetchProductsById,fetchProductsByCategory} = require('../controllers');
const router = express.Router();

router.post('/products', fetchAllProduct);
router.get('/product/:id', fetchProductsById);
router.get('/product/:cat', fetchProductsByCategory);


module.exports = router;
