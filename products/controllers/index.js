const Product = require('../models');

const fetchAllProduct = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products);
    } catch (e) {
    console.error('---Error fetching products ----',e);
      res.status(500).send({message: 'Error fetching products'});
    }
}

const fetchProductsById = async (req,res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOne({_id: id});
        res.status(200).send(product);
    } catch (e) {
        console.error('---Error fetching product ----',id, e);
        res.status(500).send({message: 'Error fetching specific product informations'});
    }
}

const fetchProductsByCategory = async (req,res) => {
    const id = req.params.catId;
    try {
        const products = await Product.findByCat({_id: id});
        res.status(200).send(products);
    } catch (e) {
        console.error('---Error fetching product for category ----',id, e);
        res.status(500).send({message: 'Error fetching specific product informations'});
    }
}

const addProduct = async (req, res) => {
    const {name, category, price} = req.body;
    try {
       // mongoose model
       const newProduct = new Product({
           name,
           category,
           price,
       })
       const product = await newProduct.save();
       res.status(201).send(product);
    } catch (e) {
      console.error('---Error creating new product ----',e);
      res.status(500).send({message: 'Error creating new product'});
    }
}

module.exports = {fetchAllProduct, fetchProductsById, fetchProductsByCategory, addProduct};
