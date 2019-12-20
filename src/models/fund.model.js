const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const fundSchema = new Schema({
    name: String,
    phone: Number,
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Kindly enter a valid email address')
            }
        }
    },
    amount: Number
})

const Fund = mongoose.model('Fund', fundSchema);
module.exports = Fund;