XXAPP.controller('UserRoleAddCtrl', ['$rootScope', '$scope', '$state', '$uibModal', '$uibModalInstance', '$http', 'rolesList', 'modalData',
    function ($rootScope, $scope, $state, $uibModal, $uibModalInstance, $http, rolesList, modalData) {
        $scope.userId = modalData.userId;
        $scope.roles = rolesList.data.data;

        $scope.roleManage = {
            rolesSel:{}
        };


        $scope.closeModal = function () {
            //$uibModalInstance.dismiss();
            angular.forEach($scope.roles,function(groupObj){
                console.log("group选择："+groupObj.checked);
                angular.forEach(groupObj,function(roleObj){
                    console.log("group选择："+roleObj.checked);
                });
            });

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

        };

    }]);