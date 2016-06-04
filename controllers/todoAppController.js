var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.getDbConnectionString());

var todoSetup = require('../models/todoModel');
module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){
        
        var starterTodos = [
            {
            username: 'test',
            todo: 'test this application',
            isCompleted: false,
            hasAttachment: false
            },
            {
            username: 'test',
            todo: 'test this application again',
            isCompleted: false,
            hasAttachment: false
            },{
            username: 'test',
            todo: 'learn node',
            isCompleted: false,
            hasAttachment: false
            }
            
        ];
        todoSetup.create(starterTodos,function(err,results){
            res.send(results);
        });
    });
}