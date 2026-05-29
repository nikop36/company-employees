angular.module('employeeApp')
  .component('userDetails', {
    bindings: {
      user: '<',
      onDelete: '&',
      onClose: '&'
    },
    templateUrl: 'app/components/user-details/user-details.template.html',
    controller: function() {
      var ctrl = this;
      ctrl.showDeleteConfirm = false;

      ctrl.confirmDelete = function() {
        ctrl.showDeleteConfirm = true;
      };

      ctrl.cancelDelete = function() {
        ctrl.showDeleteConfirm = false;
      };

      ctrl.doDelete = function() {
        ctrl.showDeleteConfirm = false;
        ctrl.onDelete({ userId: ctrl.user.id });
      };
    }
  });
