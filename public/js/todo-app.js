angular.module('todo-Application',[]);
angular.module('todo-Application')
    .controller('MainController',mainController);

function mainController($scope, $http)
{
   
    $scope.formData = {};
    $http.get('/todo-app').success(function(data){
        $scope.todos = data;
        console.log(data);


    })
    .error(function(data){
        console.log('Error: ' + data);
    });
    
       $scope.createTodo = function() {
        $http.post('/todo-app', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    
   $scope.deleteTodo = function(id) {
   $http.delete('/todo-app/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}