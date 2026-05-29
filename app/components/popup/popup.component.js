angular.module('employeeApp')
  .component('popup', {
    transclude: true,
    bindings: {
      title: '@',
      isOpen: '<',
      onClose: '&'
    },
    templateUrl: 'app/components/popup/popup.template.html'
  });
