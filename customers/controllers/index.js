const Customer = require('../models');
const jwt = require('jsonwebtoken');

const createToken = async (customer) => {
    const { email, name } = customer;
    const token = await jwt.sign({ email, name }, process.env.JWT_SECRET || 'secret_key');
    return token;
}
const registerNewCustomer = async (req, res) => {
    const { name, email, address, password } = req.body;
    try {
        // mongoose model
        const newCustomer = new Customer({
            name,
            email,
            address,
            password,
        })
        const customer = await newCustomer.save();

        res.status(201).send("Registered successfully");
    } catch (e) {
        console.error('---Error registering customer ----', e);
        res.status(500).send({ message: 'Error registering new customer' });
    }
}

const loginCustomer = async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer = await Customer.findOne({ email });
        if (!customer) {
            res.status(401).send({ message: 'Either Customer or password  is invalid' })
        }
        const match = await customer.isValidPassword(password);
        if (match) {
            const token = await createToken(customer);
            res.status(200).send(token);
        } else {
            res.status(401).send({ message: 'Either Customer or password  is invalid' })
        }

    } catch (e) {
        console.error('---Error login user ----', e);
        res.status(403).send({ message: 'Invalid Login' });
    }
}

const fetchAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).send(customers);
    } catch (e) {
        console.error('---Error fetching customers ----', e);
        res.status(500).send({ message: 'Error fetching customer informations' });
    }
}

const fetchCustomerById = async (req, res) => {
    const id = req.params.id;
    try {
        const customer = await Customer.findOne({ _id: id });
        res.status(200).send(customer);
    } catch (e) {
        console.error('---Error fetching customers specific ----', e);
        res.status(500).send({ message: 'Error fetching specific customer informations' });
    }
}
module.exports = { registerNewCustomer, loginCustomer, fetchAllCustomers, fetchCustomerById };