XXAPP.controller('ApiOpenCtrl', function($rootScope, $scope, $http,$sce, $timeout) {
    var md = window.markdownit();
    $http.get("/assets/md/api/open.md?t="+currTime).success(function(data){
        var result = md.render(data);
        $scope.openApi= $sce.trustAsHtml(result);
    }).error(function(error){
        console.log(error);
    });
});