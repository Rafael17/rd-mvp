require('./models/db');
const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');

const projectController = require('./controllers/projectController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use(cors({
    origin: ['http://localhost:8080','http://localhost:4200']
}));

app.use('/projects', projectController);

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
