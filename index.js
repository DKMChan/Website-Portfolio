var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use('/assets',express.static(__dirname + '/public'));

//when a client connects to the website then render the index page
app.get('/',function(req,res){
   res.render('index'); 
});

app.set('view engine', 'ejs');


app.listen(port);