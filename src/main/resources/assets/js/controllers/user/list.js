XXAPP.controller('UserListController', function($rootScope, $scope,$state,$uibModal, settings) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });


    $scope.addRole = function () {
        $uibModal.open({
            templateUrl:CONTEXT+'/pages/user/manage/add_role_modal.html',
            controller: 'UserRoleAddCtrl',
            size: 'lg',
            backdrop: 'static'
        });
    };

    $scope.addUser=function(){
        $state.go("sys.user.add");
    };

});