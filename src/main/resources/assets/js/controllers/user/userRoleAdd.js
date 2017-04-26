XXAPP.controller('UserRoleAddCtrl', ['$rootScope', '$scope', '$state', '$uibModal', '$uibModalInstance', '$http','Notification', 'rolesList','rolesOfuser', 'modalData',
  function ($rootScope, $scope, $state, $uibModal, $uibModalInstance, $http, Notification,rolesList,rolesOfuser, modalData) {
    $scope.userId = modalData.userId;
    $scope.roles = rolesList.data.data || [];
    $scope.rolesOfuser = rolesOfuser.data.data || {};
    /*********************************************
     --------->初始化角色
     *********************************************/
    var initRolesOfUser = function(){
      var userRoleGroup = $scope.rolesOfuser.groupRoles.split(",");
      var userRolesIds = $scope.rolesOfuser.rolesIds.split(",");
      for(var m=0;m<$scope.roles.length;m++){
        angular.forEach(userRoleGroup,function(item){
          if($scope.roles[m].roleGroup===item){
            $scope.roles[m].checked="yes";
          }
        });

        for(var n=0;n<$scope.roles[m].items.length;n++){
          if($scope.roles[m].checked==="yes"){
            $scope.roles[m].items[n].checked="yes";
          }else{
            angular.forEach(userRolesIds,function(item){
              if($scope.roles[m].items[n].id===item){
                $scope.roles[m].items[n].checked="yes";
              }
            });
          }
        }
      }
    };
    initRolesOfUser();

    //----------------------全选/反选---------------------
    $scope.checkAll = function(roleGroup){
      console.log(roleGroup);
      angular.forEach($scope.roles,function(rolesGroup){
        if(rolesGroup.roleGroup===roleGroup.roleGroup){
          angular.forEach(rolesGroup.items,function(item){
            if(roleGroup.checked==="yes"){
              item.checked="yes";
            }else{
              item.checked="no";
            }
          });
        }
      });
    };

    $scope.roleManage = {
      rolesSel:{}
    };


    $scope.closeModal = function () {
      $uibModalInstance.close($scope.roleManage);
    };

    //获取角色列表

    //获取角色列表

    //获取用户角色信息


    //添加用户角色信息
    $scope.addRoleToUser = function () {

    };

    //更新用户角色
    $scope.updateRoleToUser = function () {
      var rolesParams = {
        userId:"1",
        rolesIds:"",
        rolesGroup:""
      };//角色params

      var rolesIds=[],rolesGroup = [];

      for(var i=0;i<$scope.roles.length;i++){
        if($scope.roles[i].checked==="yes"){
          rolesGroup.push($scope.roles[i].roleGroup);
          continue;
        }else{
          for(var j=0;j<$scope.roles[i].items.length;j++){
            if($scope.roles[i].items[j].checked==="yes"){
              rolesIds.push($scope.roles[i].items[j].id);
            }
          }
        }
      }
      rolesParams.rolesIds = rolesIds.join(",");
      rolesParams.rolesGroup = rolesGroup.join(",");
      //---------发送更新角色请求的数据-------
      $http({
        method:'post',
        url:'role/updateRoleOfUser',
        data:angular.toJson(rolesParams)
      }).success(function (resp) {
        if(resp.flag="success") {
          Notification.success({title: '设置用户角色', message: "设置用户角色成功", positionY: 'top', positionX: 'center'});
        }
      });

    };

  }]);