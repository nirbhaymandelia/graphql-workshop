const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    category: String,
    price: Number
})

ProductSchema.set('toJSON', {
    virtuals: true
});

ProductSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
