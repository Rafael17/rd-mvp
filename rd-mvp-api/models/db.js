const mongoose = require('mongoose');

mongoose.connect('mongodb://database:27017/rd-mvp', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./project.model');