var configValues = require('./config');
module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds015403.mlab.com:15403/node-todo-app';
    }
}