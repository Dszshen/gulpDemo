XXAPP.controller('RoleListController',function($rootScope,$scope,$http,$uibModal) {
    $http.get(CONTEXT+"/system/role/list?t="+new Date().getTime()).success(function(result){
        $scope.roles = result.data;
        if(result.code==300){
            console.log(result.message);
        }

    }).error(function(error){
        //打印error信息
        //console.log(error);
    });

    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });

    $scope.addPermission = function () {
        $scope.treeModal ={
            header:"为角色授权",
            title:"权限树列表"
        };
        $uibModal.open({
            //templateUrl: CONTEXT+'/pages/system/role/modal/role_pms.html?version=' + version,
            templateUrl:CONTEXT+'/common/modal/tree_modal.html',
            controller: 'TreeModalCtrl',
            resolve: {
                treeModal: function () {
                    return $scope.treeModal;
                }
            }
        });
    };

});