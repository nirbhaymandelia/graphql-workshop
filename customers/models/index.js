const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    address: String,
    password: String,
})

CustomerSchema.pre('save', async function (next) {
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
    next();
})

CustomerSchema.methods.isValidPassword = async function (newPassword) {
    const match = await bcrypt.compare(newPassword, this.password);
    return match;
}

CustomerSchema.virtual('id').get(function () {
    return this._id.toHexString();
})

CustomerSchema.set('toJSON', {
    virtuals: true
})

const Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;