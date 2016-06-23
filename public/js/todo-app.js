var angularApp = angular.module('todo-Application',['ngMessages']);
angularApp.controller('mainController',['$scope','$http' ,function($scope,$http)
{
   $scope.formData = {};
    $http.get('/api/todo-app').success(function(data){
        $scope.todos = data;
        console.log(data);
    })
    .error(function(data){
        console.log('Error: ' + data);
    });
    
       $scope.createTodo = function() {
        $http.post('/api/todo-app', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.todos = data;
                console.log(data);
       
            
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    
   $scope.deleteTodo = function(id) {
   $http.delete('/api/todo-app/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


}]);