XXAPP.controller('SystemSettingController', function($scope,$window) {
    $scope.tabs = [
        {title : 'jquery' ,content : '我是jquery内容'},
        {title : 'angular' ,content : '我是angular内容'}
    ];
    $scope.alertMe = function(){
        $window.alert('html5jq-FE学习平台欢迎您!');
    };
});