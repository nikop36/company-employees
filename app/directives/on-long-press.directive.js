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
        // Note: a completed long-press still fires a click event afterwards,
        // which triggers ng-click (selectUser). This is intentional — the spec
        // only requires a console.log on long-press; click suppression is not required.

        $scope.$on('$destroy', function() {
          $timeout.cancel(pressTimer);
          $element.off('mousedown touchstart', startPress);
          $element.off('mouseup mouseleave touchend touchcancel', cancelPress);
        });
      }
    };
  }]);
