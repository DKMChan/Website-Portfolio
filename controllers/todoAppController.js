var mongoose = require('mongoose');
var config = require('../config');
var todoSetup = require('../models/todoModel');
mongoose.connect(config.getDbConnectionString());

//set up the database with starter data
module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){
    var starterTodos = [
            {
             objective: 'test this application for errors'
            },
            {
             objective: 'add more functionality to the applicatiob'
            },{
             objective: 'create a better UI for the application'
            }
        ];
        todoSetup.create(starterTodos,function(err,results){
            res.send(results);
        });
    });
}