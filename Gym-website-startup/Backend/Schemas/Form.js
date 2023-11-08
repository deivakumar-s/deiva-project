const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    comments: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Form', FormSchema);
