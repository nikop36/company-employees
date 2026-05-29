angular.module('employeeApp')
  .factory('UsersFactory', ['$http', function($http) {
    return {
      getUsers: function() {
        return $http.get('https://jsonplaceholder.typicode.com/users');
      }
    };
  }]);
