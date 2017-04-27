XXAPP.controller('RoleAddController', ['$scope', '$http', function ($scope, $http) {
  $scope.role = {
    cn: "",
    en: "",
    state:"",
    description: "",
    roleGroup:"",
    roleGroupDesc:""
  };

  //获取角色组信息
  $http({
    method: 'get',
    url: 'role/getRoleGroups?t=' + new Date().getTime(),
    params: {userId: 1}
  }).then(function (resp, status, headers, config) {
    $scope.roleGroups = resp.data.data;
    $scope.role.groupInfo = resp.data.data[0].groupId;
  }, function (resp, status, headers, config) {
  });

  //


}]);