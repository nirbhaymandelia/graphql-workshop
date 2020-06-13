const User = require('../models');
const jwt = require('jsonwebtoken');
const createToken = async (user) => {
    const {email, name} = user;
    const token = await jwt.sign({email,name}, process.env.JWT_SECRET || 'secret_key');
    return token;
}
const registerNewUser = async (req, res) => {
    const {name, email, password, age} = req.body;
    try {
       // mongoose model
       const newUser = new User({
           name,
           email,
           password,
           age
       })
       const user = await newUser.save();
       res.status(201).send(user);
    } catch (e) {
      console.error('---Error registering user ----',e);
      res.status(500).send({message: 'Error registering new user'});
    }
}

const loginUser = async (req,res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            res.status(401).send({message: 'Either User or password  is invalid'})
        }
        const match = await user.isValidPassword(password);
        if (match) {
            const token = await createToken(user);
            res.status(200).send(token);
        }else{
            res.status(401).send({message: 'Either User or password  is invalid'})
        }
        
    } catch (e) {
    console.error('---Error login user ----',e);
      res.status(403).send({message: 'Invalid Login'});
    }
}

const fetchAllUsers = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (e) {
    console.error('---Error fetching users ----',e);
      res.status(500).send({message: 'Error fetching user informations'});
    }
}

const fetchUserById = async (req,res) => {
    const id = req.params.id;
try {
        const user = await User.findOne({_id: id});
        res.status(200).send(user);
    } catch (e) {
    console.error('---Error fetching users specific ----',e);
      res.status(500).send({message: 'Error fetching specific user informations'});
    }
}
module.exports = {registerNewUser,loginUser,fetchAllUsers,fetchUserById};