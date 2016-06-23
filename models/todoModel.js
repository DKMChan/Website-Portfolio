var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//add to schema to update the records in the database
var todoSchema = new Schema({
    objective: String,
});

var todoList = mongoose.model('todoList',todoSchema);

module.exports = todoList;