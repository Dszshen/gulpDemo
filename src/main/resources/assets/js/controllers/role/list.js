XXAPP.controller('RoleListController', ['$rootScope', '$scope', '$http', '$uibModal',
  function ($rootScope, $scope, $http, $uibModal) {
    $http({method: "get", url: "role/list?t=" + new Date().getTime()}).then(function (result) {
      $scope.roles = result.data.data;
      if (result.code == 300) {
        console.log(result.message);
      }
    });

    $scope.$on('$viewContentLoaded', function () {
      App.initAjax();
    });

    $scope.addPermission = function () {
      $uibModal.open({
        templateUrl: CONTEXT + '/pages/role/add_permission_modal.html',
        controller: 'RolePermissionAddCtrl',
        size: 'lg',
        backdrop: 'static'
      });
    };

    //编辑角色
    $scope.edit = function () {

    };

    //删除角色
    $scope.del = function () {

    };

  }]);