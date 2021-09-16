const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId,,
        ref: "User"
    },
    name: {  type: String, required: true },
    imageUrl: {  type: String, required: true },
})

