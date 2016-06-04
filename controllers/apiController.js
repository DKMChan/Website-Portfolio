var todoList = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

      //get all objects from database when page is loaded
      app.get('/todo-app', function(req, res) {
        todoList.find(function(err, todos) {
            if (err) throw err
            res.json(todos); 
         });
      });

    // create todo and send back all todos after creation
    app.post('/todo-app', function(req, res) {
       if(req.body.text === "")
       {
           var message = "string is empty";
           console.log("string empty");
       }
       else {
        todoList.create({
                objective : req.body.text,
                done : false
             }, 
            function(err, todo) {
            if (err) throw err
            // get and return all the todos after you create another
            todoList.find(function(err, todos) {
                if (err) throw err
                res.json(todos);
            });
        });
    }

    });

    // delete a todo
    app.delete('/todo-app/:todo_id', function(req, res) {
        todoList.remove({
                _id : req.params.todo_id
            }, 
        function(err, todo) {
            if (err) throw err
            
            // get and return all the todos after you create another
           todoList.find(function(err, todos) {
                if (err) throw err
                res.json(todos);
            });
        });
    });
    

}