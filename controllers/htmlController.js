/*
Controller for the html portions of the application
renders the pages for each get/post request

 */

module.exports = function (app){
    var people = [
        {
            name: 'John'
        },
        {
            name: 'Jane'
        },
         {
            name: 'Jill'
        }
    ];
   //when a client connects to the website then render the index page
    app.get('/',function(req,res){
        res.render('index'); 
    }); 
    
    //placeholder for chat application page
    app.get('/chat-app',function(req,res){
        res.render('index'); 
    });
    
      app.get('/angular',function(req,res){
        res.render('angular', {serverPeople: people}); 
    });
        
}