var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    objective: String,
});

var todoList = mongoose.model('todoList',todoSchema);

module.exports = todoList;