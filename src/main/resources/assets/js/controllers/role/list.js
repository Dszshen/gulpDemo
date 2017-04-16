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
        $uibModal.open({
            templateUrl:CONTEXT+'/pages/role/add_permission_modal.html',
            controller: 'RolePermissionAddCtrl',
            size: 'lg',
            backdrop: 'static'
        });
    };

});