XXAPP.controller('LoginController', function($rootScope, $scope, $http,$state, $timeout) {
    $scope.login=function(){
        var param={};
        param.username = $scope.username;
        param.password = $scope.password;

        $scope.tip={
            "show":false,
            "message":""
        };

        $http.post("/login",param).success(function(data){
            console.log(data);
            if(data.flag=='success'){
                $state.go("index.dashboard");
                if(data.data!==null && data.data.user!==null){
                    $rootScope.user = data.data.user;
                }
            }else if(data.flag=='failure'){
                $scope.tip.show = true;
                $scope.tip.message = data.message;
            }else if(data.flag=='error'){
                $scope.tip.show = true;
                $scope.tip.message = data.message;
            }else{
                $scope.tip.show = true;
                $scope.tip.message = "程序出错。";
            }
        });
    };
});