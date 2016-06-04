var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var htmlController = require('./controllers/htmlController');
var app = express();

var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets',express.static(__dirname + '/public'));




app.set('view engine', 'ejs');

htmlController(app);
app.listen(port);