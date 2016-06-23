var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var htmlController = require('./controllers/htmlController');
var todoAppController = require('./controllers/todoAppController');
var apiController = require('./controllers/apiController');
var app = express();

var port = 8080;

app.use('/assets',express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.set('view engine', 'ejs');

htmlController(app);
todoAppController(app);
apiController(app);
app.listen(port);