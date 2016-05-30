var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets',express.static(__dirname + '/public'));

//when a client connects to the website then render the index page
app.get('/',function(req,res){
   res.render('index'); 
});

//handle post data on the index page(contact form)
app.post('/send',function(req,res){
 console.log('Test');
 var transporter = nodemailer.createTransport({
     service: 'Gmail',
     auth: {
         user: 'desmondwebportfolio@gmail.com',
         pass: 'Fyqtqcje1'
     }
 });

var mailOptions = {
    from: 'Portfolio Contact <desmondwebportfolio@gmail.com>',
    to: 'desmondkmchan@gmail.com',
    subject: 'Website Contact',
    text: 'Name: ' + req.body.name +
          '\nEmail:' + req.body.email +
          '\nMessage:' + req.body.message 
};
transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.log(error);
        res.redirect('/');
    }else{
        console.log('Message Sent' + info.response);
        res.redirect('/');
    }
});

});



app.set('view engine', 'ejs');


app.listen(port);