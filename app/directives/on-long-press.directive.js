angular.module('employeeApp')
  .directive('onLongPress', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function($scope, $element) {
        var pressTimer;

        function startPress() {
          $timeout.cancel(pressTimer);
          pressTimer = $timeout(function() {
            console.log('longPress detected');
          }, 600);
        }

        function cancelPress() {
          $timeout.cancel(pressTimer);
        }

        $element.on('mousedown touchstart', startPress);
        $element.on('mouseup mouseleave touchend touchcancel', cancelPress);

        $scope.$on('$destroy', function() {
          $timeout.cancel(pressTimer);
          $element.off('mousedown touchstart', startPress);
          $element.off('mouseup mouseleave touchend touchcancel', cancelPress);
        });
      }
    };
  }]);
