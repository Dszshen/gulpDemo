XXAPP.controller('UserListController', function($rootScope, $scope,$state,$uibModal, settings) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });


    $scope.addRole = function () {
        $scope.treeModal ={
            header:"添加角色",
            title:"角色树列表"
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

    $scope.addUser=function(){
        $state.go("sys.user.add");
    };

});