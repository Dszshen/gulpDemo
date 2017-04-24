XXAPP.controller('RoleListController',function($rootScope,$scope,$http,$uibModal) {
    $http.get("role/list?t="+new Date().getTime()).then(function(result){
        $scope.roles = result.data.data;
        if(result.code==300){
            console.log(result.message);
        }

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