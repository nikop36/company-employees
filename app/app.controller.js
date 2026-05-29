angular.module('employeeApp')
  .controller('MainController', ['$scope', 'UsersFactory', function($scope, UsersFactory) {
    $scope.users = [];
    $scope.selectedUser = null;

    UsersFactory.getUsers().then(function(response) {
      $scope.users = response.data;
    });

    $scope.selectUser = function(user) {
      $scope.selectedUser = user;
    };

    $scope.closeDetails = function() {
      $scope.selectedUser = null;
    };

    $scope.deleteUser = function(userId) {
      $scope.users = $scope.users.filter(function(u) {
        return u.id !== userId;
      });
      $scope.closeDetails();
    };
  }]);
