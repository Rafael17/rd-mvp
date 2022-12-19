const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This field is required.'
    },
    expenses: [{
        amount: Number,
        timestamp: Number,
        title: String,
        isQualified: Boolean
    }],
});

mongoose.model('projects', projectSchema);