XXAPP.controller('UserListController',['$rootScope', '$scope','$state','$uibModal','$http','$q',function($rootScope, $scope,$state,$uibModal, $http,$q) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });

    $scope.userList = [];
    $http({
        method:'get',
        url:'user/list?t='+new Date().getTime()
    }).then(function (resp, status, headers, config) {
        console.log(resp);
        $scope.userList = resp.data.data;
    },function(resp, status, headers, config) {
    });


    $scope.addRole = function (userId) {
        var addRoleModal = $uibModal.open({
            templateUrl:CONTEXT+'/pages/user/manage/add_role_modal.html',
            controller: 'UserRoleAddCtrl',
            size: 'lg',
            backdrop: 'static',
            resolve:{
                modalData:{
                    userId:userId
                },
                rolesList:function(){
                    var deferred = $q.defer();
                    $http({
                        method:'get',
                        url:'role/rolesGroupList?t='+new Date().getTime()
                    }).then(function (resp, status, headers, config) {
                        console.info("角色组--：",resp);
                        deferred.resolve(resp);
                    },function(resp, status, headers, config) {
                        deferred.reject(resp);   // 声明执行失败，即服务器返回错误
                    });
                    return deferred.promise;
                }
                /*rolesOfuser:function(){
                    var deferred = $q.defer();
                    $http({
                        method:'get',
                        url:'role/getRolesOfUser?t='+new Date().getTime()
                    }).then(function (resp, status, headers, config) {
                        console.info("用户拥有角色：",resp);
                        deferred.resolve(resp);
                    },function(resp, status, headers, config) {
                        deferred.reject(resp);   // 声明执行失败，即服务器返回错误
                    });
                    return deferred.promise;
                }*/
            }
        });

        addRoleModal.result.then(function (resp) {
            //获取data
            //console.log(data);
            //console.info("角色选择data-->：",resp);
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.addUser=function(){
        $state.go("sys.user.add");
    };

}]);