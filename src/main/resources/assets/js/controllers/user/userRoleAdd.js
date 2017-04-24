XXAPP.controller('UserRoleAddCtrl', ['$rootScope', '$scope', '$state', '$uibModal', '$uibModalInstance', '$http', function ($rootScope, $scope, $state, $uibModal, $uibModalInstance, $http) {
  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };

  $scope.roleArr = [{
    group1: [
      {
        id: 1,
        name: "角色1"
      }, {
        id: 2,
        name: "角色2"
      }, {
        id: 3,
        name: "角色3"
      }
    ]
  }
  ];
  $scope.rolesFn = function () {

  };

  //给用户添加角色
  $scope.addRoleToUser = function () {
    var params = {
      userId: "",
      roleIds: ""
    };
    $http({
      method: 'post',
      url: 'role/addRoleOfUser',
      data: angular.toJson($scope.companyInfo)
    }).success(function (resp) {
      if (resp.flag = "success") {
        Notification.success({title: '为用户赋予角色', message: "赋予角色成功", positionY: 'top', positionX: 'center'});
      }
    });
  };

  $scope.updateRoleOfUser = function () {
    $http({
      method: 'post',
      url: 'role/addRoleOfUser',
      data: angular.toJson($scope.companyInfo)
    }).success(function (resp) {
      console.log(resp);
      if (resp.flag = "success") {
        Notification.success({title: '更新角色', message: "更新角色成功", positionY: 'top', positionX: 'center'});
      }
    });
  };

}]);