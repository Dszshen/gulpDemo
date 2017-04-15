XXAPP.controller('SystemSettingController',['$scope','$http',function($scope,$http) {

    $scope.config = {
        name:"",
        addr:"",
        employees:"",
        main_business:"",
        legal_person:"",
        create_date:"",
        desc:""
    };

    //设置基本信息
    $scope.setConfig = function () {
        var params = $scope.config;
        console.log(params);

        $http({
            method:'post',
            url:'sys/base/add',
            data:angular.toJson($scope.config)
        }).success(function (data) {
            alert(data);
        });
    };


}]);