const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Project = mongoose.model('projects');

router.post('/', (req, res) => {
    project = new Project();
    project.title = req.body.title;
    project.expenses = req.body.expenses;
    project.save((err, doc) => {
        if (!err){
            res.json(doc);
        }else{
            console.log(err);
        }
    });
});


router.get('/', (req, res) => {
    Project.find((err, docs) => {
        res.json(docs)
    });
});

router.delete('/:id', (req, res) => {
    Project.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({message: 'deleted'})
        }
    });
});

module.exports = router;