/***
XX AngularJS App Main Script
***/

/* XXAPP */
var XXAPP = angular.module("XXAPP", [
    "ui.router",
    "ui.bootstrap",
    "ui.tree",
    "oc.lazyLoad",  
    "ngSanitize",
    "frapontillo.bootstrap-switch",
    "duScroll",
    "ngJsTree"
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
XXAPP.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });
}]);


//AngularJS v1.3.x workaround for old style controller declarition in HTML
XXAPP.config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);


/* 全局设置 */
XXAPP.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: CONTEXT+'/assets'
        //globalPath: '../assets/global',
        //layoutPath: '../assets/layouts/layout',
    };

    //当前时间
    //$rootScope.nowTime = new Date().getTime();
    $rootScope.settings = settings;

    return settings;
}]);

/* 全局app */
XXAPP.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$viewContentLoaded', function() {
        //App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
    });
}]);

/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* 页头 */
XXAPP.controller('HeaderController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
        App.initAjax();
    });
}]);

/* 左边菜单 */
XXAPP.controller('SidebarController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });
}]);

/* 快捷菜单 */
XXAPP.controller('QuickSidebarController', ['$scope', function($scope) {    
    $scope.$on('$includeContentLoaded', function() {
       setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar        
        }, 2000);
    });
}]);

/* 主题样式 */
XXAPP.controller('ThemePanelController', ['$scope', function($scope) {    
    $scope.$on('$includeContentLoaded', function() {
        Demo.init(); // init theme panel
    });
}]);

/* 页脚 */
XXAPP.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);

