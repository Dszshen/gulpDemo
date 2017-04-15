XXAPP.controller('SystemSettingController',['$scope','$http','Notification',function($scope,$http,Notification) {

    //公司config
    $scope.companyInfo = {
        id:"e1eae6d3-6fff-42e7-a793-051aff817d9a",
        name:"",
        addr:"",
        employees:"",
        main_business:"",
        legal_person:"",
        tel:"",
        mobile_number:"",
        create_date:"",
        description:""
    };

    //安全config
    $scope.securityInfo = {
        id:"",
        white_list:"",
        forbid_list:"",
        max_conn:""
    };

    $scope.emailInfo={
        id:"",
        model:"",
        smtp_server:"",
        port:"",
        account:"",
        password:"",
        receive_addr:""
    };

    $scope.config = {
        company:{
            get:function(){
                $http({
                    method:'get',
                    url:'sys/base',
                    params:{id:$scope.companyInfo.id}
                }).success(function (resp) {
                    console.log(resp);
                    if(resp.flag="success"){
                        $scope.companyInfo = resp.data[0];
                    }

                });
            },
            update:function(){
                var params = $scope.companyInfo;
                console.log(params);
                $http({
                    method:'PUT',
                    url:'sys/base',
                    data:angular.toJson($scope.companyInfo)
                }).success(function (resp) {
                    console.log(resp);
                    if(resp.flag="success") {
                        Notification.success({title: '提交表单', message: "提交成功", positionY: 'top', positionX: 'center'});
                    }
                });
            }
        },
        security:{
            get:function(){
                $http({
                    method:'get',
                    url:'sys/base',
                    params:{id:$scope.securityInfo.id}
                }).success(function (resp) {
                    $scope.securityInfo = resp.data[0];
                });
            },
            update:function(){
                var params = $scope.securityInfo;
                $http({
                    method:'PUT',
                    url:'sys/base',
                    data:angular.toJson($scope.securityInfo)
                }).success(function (resp) {
                    console.log(resp);
                });
            }
        },
        email:{

        }
    };

    //获取公司信息
    $scope.getCompanyInfo = function(){
        $http({
            method:'get',
            url:'sys/base',
            params:{id:$scope.companyInfo.id}
        }).success(function (resp) {
            $scope.companyInfo = resp.data[0];
            console.log(resp);
        });
    };

    $scope.config.company.get();

    //添加基本信息
    $scope.addCompanyInfo = function () {
        var params = $scope.companyInfo;
        console.log(params);

        $http({
            method:'post',
            url:'sys/base',
            data:angular.toJson($scope.companyInfo)
        }).success(function (resp) {
            console.log(resp);
        });
    };

    //更新基本信息
    $scope.updateCompanyInfo = function () {
        var params = $scope.companyInfo;
        console.log(params);

        $http({
            method:'PUT',
            url:'sys/base',
            data:angular.toJson($scope.companyInfo)
        }).success(function (resp) {
            console.log(resp);
        });
    };


}]);