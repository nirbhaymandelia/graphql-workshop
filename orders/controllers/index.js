const Order = require('../models/order');

const fetchAllOrder = async (req,res) => {
    try {
        const Orders = await Order.find({});
        res.status(200).send(Orders);
    } catch (e) {
    console.error('---Error fetching Orders ----',e);
      res.status(500).send({message: 'Error fetching Orders'});
    }
}

const fetchOrderById = async (req,res) => {
    const id = req.params.id;
    try {
        const order = await Order.findOne({_id: id});
        res.status(200).send(order);
    } catch (e) {
        console.error('---Error fetching order ----',id, e);
        res.status(500).send({message: 'Error fetching specific order informations'});
    }
}

const createOrder = async (req, res) => {
    const {customer, shippingAddress, paymentMethod, products} = req.body;
    try {
       // mongoose model
       const newOrder = new Order({
        customer, shippingAddress, paymentMethod, products
       })
       const order = await Order.save();
       res.status(201).send(order);
    } catch (e) {
      console.error('---Error creating new order ----',e);
      res.status(500).send({message: 'Error creating new order'});
    }
}

module.exports = {fetchAllOrder, fetchOrderById, createOrder};
