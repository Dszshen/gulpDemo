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


/* Init global settings and run the app */
XXAPP.run(["$rootScope", "settings", "$state", function($rootScope, settings, $state) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view
}]);
/* 所有页面的路由跳转 */
XXAPP.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // 如果没有匹配到url请求就跳转到欢迎页
    $urlRouterProvider.otherwise("/login");

    //封装$stateProvider.state方法
    var state = function (name, url, ctrl, tmpl, abs, data, resolve) {
        var state = {};

        if (url) {
            if (abs) {
                state.url = url;
            } else {
                state.url = url;
            }
        }
        if (ctrl) {
            state.controller = ctrl;
        }
        if (tmpl) {
            if (tmpl.indexOf('/') === 0) {
                state.templateUrl = tmpl;
            } else {
                state.template = tmpl;
            }
        }
        if (abs) {
            state.abstract = true;
        }
        if (data) {
            state.data = data;
        }
        if (resolve) {
            state.resolve = resolve;
        }
        $stateProvider.state(name, state);
    };

    var lazyLoadFiles = function ($ocLazyLoad, name, css, cssFiles, jsId, jsFiles) {
        return {};
    };

    //登录注册
    state('login', '/login', 'LoginController', '/pages/login.html', false, {pageTitle: '登录'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'login',
                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                files: [
                    CONTEXT + '/assets/css/pages/login.css'
                ]
            });
        }]
    });
    state('register', '/register', 'RegisterController', '/pages/register.html', false, {pageTitle: '注册'});
    //欢迎页面
    state('index', '/index', 'AppController', '/template/index.html', true);

    state('index.dashboard', '/dashboard', 'DashboardController', '/pages/dashboard.html', false, {pageTitle: '欢迎页'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'XXAPP',
                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                files: [
                    CONTEXT + '/assets/libs/morrisjs/morris.css',
                    CONTEXT + '/assets/libs/morrisjs/morris.min.js',
                    CONTEXT + '/assets/libs/raphael/raphael-min.js',
                    CONTEXT + '/assets/libs/jquery-sparkline/dist/jquery.sparkline.min.js',

                    CONTEXT + '/assets/scripts/pages/dashboard.min.js'
                    //'/assets/js/controllers/DashboardController.js'
                ]
            });
        }]
    });

    //----------------------------------------------系统管理  start----------------------------------------
    //系统管理-->>>系统参数设置
    state('sys', '/system', 'SystemController', '/template/index.html', true);
    state('sys.setting', '/setting', 'SystemSettingController', '/pages/system/setting.html', false, {pageTitle: '系统参数设置'});
    state('sys.info', '/info', 'SystemInfoController', '/pages/system/info.html', false, {pageTitle: 'XX公司信息'});

    //系统管理-->>>用户管理
    state('sys.user', '/user', 'SystemUserController', '<ui-view></ui-view>', true);
    state('sys.user.list', '/list', 'UserListController', '/pages/system/user/manage/list.html', false, {pageTitle: '用户列表'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'userListCss',
                insertBefore: '#css_lazyload',
                files: [
                    '/assets/libs/DataTables/datatables.min.css',
                    '/assets/libs/DataTables/plugins/bootstrap/datatables.bootstrap.css'
                ]
            }, {
                name: 'userListJs',
                insertBefore: '#js_lazyload',
                files: [
                    '/assets/libs/DataTables/datatables.all.min.js',
                    "/assets/libs/jstree/dist/jstree.min.js",
                    '/assets/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });


    state('sys.user.add', '/add', 'UserAddController', '/pages/system/user/manage/add.html', false, {pageTitle: '增加用户'});
    state('sys.user.detail', '/detail', 'UserDetailController', '/pages/system/user/manage/detail.html', false, {pageTitle: '用户资料'});

    /*用户中心*/
    state('sys.user.profile', '/profile', 'UserProfileController', '/pages/system/user/personal/profile.html', false, {pageTitle: '个人信息'});

    //系统管理-->>>角色管理
    state('sys.role', '/role', 'SystemRoleController', '<ui-view></ui-view>', true);
    state('sys.role.list', '/list', 'RoleListController', '/pages/system/role/list.html', false, {pageTitle: '角色列表'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'roleManage',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT + '/assets/libs/DataTables/datatables.min.css',
                    CONTEXT + '/assets/libs/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT + '/assets/libs/DataTables/datatables.all.min.js',
                    //CONTEXT+'/assets/libs/angular-bootstrap-switch/dist/angular-bootstrap-switch.min.js',
                    CONTEXT + '/assets/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    state('sys.role.add', '/add', 'RoleAddController', '/pages/system/role/add.html', false, {pageTitle: '增加角色'});
    state('sys.role.detail', '/detail', 'RoleDetailController', '/pages/system/role/detail.html', false, {pageTitle: '角色详情'});


    //系统管理-->>>权限管理
    state('sys.permission', '/permission', 'SystemPermissionController', '<ui-view></ui-view>', true);
    state('sys.permission.list', '/list', 'PermissionListController', '/pages/system/permission/list.html', false, {pageTitle: '权限列表'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'permissionManage',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT + '/assets/libs/DataTables/datatables.min.css',
                    CONTEXT + '/assets/libs/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT + '/assets/libs/DataTables/datatables.all.min.js',
                    CONTEXT + '/assets/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    state('sys.permission.add', '/add', 'PermissionAddController', '/pages/system/permission/add.html', false, {pageTitle: '增加权限'});
    //菜单管理
    //state('sys.menu','/user','SystemMenuController','<ui-view></ui-view>',true);
    state('sys.menu', '/menu', 'SystemMenuController', '/pages/system/menu/menu.html', false, {pageTitle: '菜单管理'});
    //栏目管理
    state('sys.column', '/column', 'SystemColumnController', '/pages/system/column.html', false, {pageTitle: '栏目管理'});
    //数据字典
    state('sys.dictionary', '/dictionary', 'SystemDictionaryController', '/pages/system/dictionary.html', false, {pageTitle: '数据字典'});
    //系统日志
    state('sys.logs', '/logs', 'SystemLogsController', '/pages/system/logs.html', false, {pageTitle: '系统日志'});
    //屏蔽词
    state('sys.shieldWords', '/shieldWords', 'SystemShieldWordsController', '/pages/system/shieldWords.html', false, {pageTitle: '屏蔽词'});

    //----------------------------------------------系统管理  end------------------------------------------------


    //----------------------------------------------房产信息管理  start--------------------------------------------
    state('house', '/house', 'HouseController', '/template/index.html', true);
    state('house.add', '/add', 'HouseAddController', '/pages/house/add.html', false, {pageTitle: '新增房产信息'});
    state('house.list', '/list', 'HouseListController', '/pages/house/list.html', false, {pageTitle: '房产信息'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'houseList',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT + '/assets/libs/DataTables/datatables.min.css',
                    CONTEXT + '/assets/libs/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT + '/assets/libs/DataTables/datatables.all.min.js',
                    CONTEXT + '/assets/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    //产权变更
    state('house.changeTitle', '/changeTitle', 'HouseChangeTitleController', '/pages/house/changeTitle.html', false, {pageTitle: '房屋产权变更'});
    state('house.drawing', '/drawing', 'HouseDrawingController', '/pages/house/drawing.html', false, {pageTitle: '房间状态图示'});
    //----------------------------------------------房产信息管理  end----------------------------------------------


    //----------------------------------------------业主管理  start--------------------------------------------
    state('homeowner', '/homeowner', 'HomeownerController', '/template/index.html', true);
    state('homeowner.add', '/add', 'OwnerAddController', '/pages/homeowner/add.html', false, {pageTitle: '业主迁入'});
    state('homeowner.out', '/out', 'OwnerOutController', '/pages/homeowner/out.html', false, {pageTitle: '业主迁出'});
    state('homeowner.list', '/list', 'OwnerListController', '/pages/homeowner/list.html', false, {pageTitle: '房间档案信息'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'homeownerList',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT + '/assets/libs/DataTables/datatables.min.css',
                    CONTEXT + '/assets/libs/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT + '/assets/libs/DataTables/datatables.all.min.js',
                    CONTEXT + '/assets/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    state('homeowner.decoration', '/decoration', 'OwnerDecorationController', '/pages/homeowner/decoration.html', false, {pageTitle: '业主装修'});
    state('homeowner.liveHistory', '/liveHistory', 'OwnerLiveHistoryController', '/pages/homeowner/liveHistory.html', false, {pageTitle: '业主入住历史'});
    state('homeowner.repair', '/repair', 'OwnerRepairController', '/pages/homeowner/repair.html', false, {pageTitle: '业主请修'});
    state('homeowner.addBuilding', '/addBuilding', 'OwnerAddBuildingController', '/pages/homeowner/addBuilding.html', false, {pageTitle: '业主加建'});
    state('homeowner.complaint', '/complaint', 'OwnerComplaintController', '/pages/homeowner/complaint.html', false, {pageTitle: '业主投诉'});
    //----------------------------------------------业主管理  end----------------------------------------------

    //----------------------------------------------销售管理  start--------------------------------------------
    //state('saleHouse','/homeowner/add','OwnerAddController','/pages/homeowner/add.html',false,{ pageTitle: '业主迁入'});
    //
    //state('saleContact','/homeowner/out','OwnerOutController','/pages/homeowner/out.html',false,{ pageTitle: '业主迁出'});

    // state('homeownerTousu','/homeowner/tousu','OwnerOutController','/pages/homeowner/tousu.html',false,{ pageTitle: '业主投诉'});
    //----------------------------------------------销售管理  end----------------------------------------------


    //----------------------------------------------费用管理  start----------------------------------------------


    //----------------------------------------------费用管理  end----------------------------------------------


    //----------------------------------------------API文档管理  start--------------------------------------------
    //API文档
    state('api', '/api', 'ApiController', '/template/index.html', true);
    state('api.dev', '/dev', 'ApiDevCtrl', '/pages/api/dev.html', false, {pageTitle: '开发文档'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'markdownIt',
                files: [
                    CONTEXT + '/assets/css/wiki.css',
                    CONTEXT + '/assets/libs/markdown-it/dist/markdown-it.min.js'
                ]
            }]);
        }]
    });
    state('api.open', '/open', 'ApiOpenCtrl', '/pages/api/open.html', false, {pageTitle: '开放文档'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'markdownIt',
                files: [
                    CONTEXT + '/assets/css/wiki.css',
                    CONTEXT + '/assets/libs/markdown-it/dist/markdown-it.min.js'
                ]
            }]);
        }]
    });
    //----------------------------------------------API文档管理  end------------------------------------------------

    //----------------------------------------------数据库设计  start----------------------------------------------
    state('database', '/database', 'DatabaseController', '/template/index.html', true);
    state('database.api', '/api', 'DatabaseApiController', '/pages/database/database.html', false, {pageTitle: '数据库设计'}, {
        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'markdownIt',
                files: [
                    CONTEXT + '/assets/css/wiki.css',
                    CONTEXT + '/assets/libs/markdown-it/dist/markdown-it.min.js'
                ]
            }]);
        }]
    });
    //----------------------------------------------数据库设计  end------------------------------------------------


}]);
XXAPP.controller('ActionsController', function($scope) {
});
XXAPP.controller('ApiController', function($scope) {
});
XXAPP.controller('ApiDevCtrl', function($rootScope, $scope, $http,$sce, $timeout) {

    // node.js, "classic" way:
    //var MarkdownIt = require('markdown-it'),
    //    md = new MarkdownIt();
    //var result = md.render('# markdown-it rulezz!');
    // node.js, the same, but with sugar:
    //var md = require('markdown-it')();
    //var result = md.render('# markdown-it rulezz!');
    // browser without AMD, added to "window" on script load
    // Note, there is no dash in "markdownit".
    var md = window.markdownit();
    $http.get("/assets/md/api/dev.md?t="+currTime).success(function(data){
        var result = md.render(data);
        $scope.devApi= $sce.trustAsHtml(result);


    }).error(function(error){
        console.log(error);
    });

});
XXAPP.controller('ApiOpenCtrl', function($rootScope, $scope, $http,$sce, $timeout) {
    var md = window.markdownit();
    $http.get("/assets/md/api/open.md?t="+currTime).success(function(data){
        var result = md.render(data);
        $scope.openApi= $sce.trustAsHtml(result);
    }).error(function(error){
        console.log(error);
    });
});
XXAPP.controller('TreeModalCtrl',function($rootScope, $scope,$uibModal,$uibModalInstance,treeModal, settings) {
    //treeModal 页面所需数据
    $scope.treeModal={
        header:treeModal.header || "树列表",
        title:treeModal.title || "树列表",
        treeData:"",
        treeConfig:""
    };



    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });

    //关闭模态框
    $scope.cancel=function(){
        $uibModalInstance.dismiss('cancel');
    };

    //jstree 数据
    $scope.treeData = [
        { id : '1', parent : '#', text : '根节点1', state: { opened: true} },
        { id : '2', parent : '#', text : '根节点2', state: { opened: true} },
        { id : '3', parent : '1', text : '孩子节点1', state: { opened: true} },
        { id : '4', parent : '1', text : '孩子节点2' , state: { opened: true}}
    ];

    /*$http.get("/assets/md/database/system.md?t="+$rootScope.nowTime).success(function(data){

    }).error(function(error){
        console.log(error);
    });*/

    //jstree的 相关配置
    $scope.treeConfig={
        'plugins': ["wholerow", "checkbox", "types"],
        'core': {
            "themes" : {
                "responsive": false
            },
            'data': [{
                "text": "Same but with checkboxes",
                "children": [{
                    "text": "initially selected",
                    "state": {
                        "selected": true
                    }
                }, {
                    "text": "custom icon",
                    "icon": "fa fa-warning icon-state-danger"
                }, {
                    "text": "initially open",
                    "icon" : "fa fa-folder icon-state-default",
                    "state": {
                        "opened": true
                    },
                    "children": ["Another node"]
                }, {
                    "text": "custom icon",
                    "icon": "fa fa-warning icon-state-warning"
                }, {
                    "text": "disabled node",
                    "icon": "fa fa-check icon-state-success",
                    "state": {
                        "disabled": true
                    }
                }]
            },
                "And wholerow selection"
            ]
        },
        "types" : {
            "default" : {
                "icon" : "fa fa-folder icon-state-warning icon-lg"
            },
            "file" : {
                "icon" : "fa fa-file icon-state-warning icon-lg"
            }
        }
    };



});
XXAPP.controller('DashboardController', function($rootScope, $scope, $http, $timeout) {
    //$scope.$on('$viewContentLoaded', function() {
        // initialize core components
        //App.initAjax();
   // });

    // set sidebar closed and body solid layout mode
    //$rootScope.settings.layout.pageContentWhite = true;
    //$rootScope.settings.layout.pageBodySolid = false;
    //$rootScope.settings.layout.pageSidebarClosed = false;
});
XXAPP.controller('DatabaseApiController', function($scope) {
    var md = window.markdownit();
    $http.get(CONTEXT+"/assets/md/database/database.md?t="+currTime).success(function(data){
        var result = md.render(data);
        $scope.database= $sce.trustAsHtml(result);


    }).error(function(error){
        console.log(error);
    });

});
XXAPP.controller('DatabaseController', function($scope) {


});
XXAPP.controller('OwnerAddController', function($rootScope, $scope, settings) {
    
});
XXAPP.controller('OwnerAddBuildingController', function($rootScope, $scope, settings) {

});
XXAPP.controller('OwnerComplaintController', function($rootScope, $scope, settings) {

});
XXAPP.controller('OwnerDecorationController', function($rootScope, $scope, settings) {

});
XXAPP.controller('HomeownerController',function($scope) {
});
XXAPP.controller('OwnerListController', function($rootScope, $scope, settings) {

});
XXAPP.controller('OwnerLiveHistoryController', function($rootScope, $scope, settings) {

});
XXAPP.controller('OwnerOutController', function($rootScope, $scope, settings) {

});
XXAPP.controller('OwnerRepairController', function($rootScope, $scope, settings) {

});
XXAPP.controller('HouseAddController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    
}]);
XXAPP.controller('HouseChangeTitleController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {

}]);
XXAPP.controller('HouseDrawingController',  function($scope) {

});
XXAPP.controller('HouseController',  function($scope) {

});
XXAPP.controller('HouseListController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {

}]);
XXAPP.controller('IndexController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();
    });

    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
});
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
XXAPP.controller('RegisterController', function($rootScope, $scope, $http, $timeout) {
});
XXAPP.controller('SaleController', function($rootScope, $scope, $http, $timeout) {
    
    
    
});
XXAPP.controller('SaleHouseController', function($rootScope, $scope, $http, $timeout) {
    

});
XXAPP.controller('SystemColumnController', function($scope) {

});
XXAPP.controller('SystemDictionaryController', function($scope) {

});
XXAPP.controller('SystemLogsController', function($scope) {

});
XXAPP.controller('SystemMenuController', function($scope) {
    
    $scope.menus=[
        {
            "id": 1,
            "title": "node1",
            "nodes": [
                {
                    "id": 11,
                    "title": "node1.1",
                    "nodes": [
                        {
                            "id": 111,
                            "title": "node1.1.1",
                            "nodes": []
                        }
                    ]
                },
                {
                    "id": 12,
                    "title": "node1.2",
                    "nodes": []
                }
            ]
        },
        {
            "id": 2,
            "title": "node2",
            "nodrop": true,
            "nodes": [
                {
                    "id": 21,
                    "title": "node2.1",
                    "nodes": []
                },
                {
                    "id": 22,
                    "title": "node2.2",
                    "nodes": []
                }
            ]
        },
        {
            "id": 3,
            "title": "node3",
            "nodes": [
                {
                    "id": 31,
                    "title": "node3.1",
                    "nodes": []
                }
            ]
        }
    ];
    
});
XXAPP.controller('PermissionAddController', function($rootScope, $scope, settings) {
    

});
XXAPP.controller('PermissionDetailController',function($rootScope, $scope, settings) {


});
XXAPP.controller('PermissionListController', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });
});
XXAPP.controller('SystemPermissionController', ['$scope', function($scope) {

}]);
XXAPP.controller('RoleAddController', ['$scope', function($scope,$modal) {


}]);
XXAPP.controller('RoleDetailController', ['$scope', function($scope) {
    

}]);
XXAPP.controller('RoleListController',function($rootScope,$scope,$http,$uibModal) {
    $http.get(CONTEXT+"/system/role/list?t="+new Date().getTime()).success(function(result){
        $scope.roles = result.data;
        if(result.code==300){
            console.log(result.message);
        }

    }).error(function(error){
        //打印error信息
        //console.log(error);
    });

    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();
    });

    $scope.addPermission = function () {
        $scope.treeModal ={
            header:"为角色授权",
            title:"权限树列表"
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

});
XXAPP.controller('SystemRoleController', function($scope) {

});
XXAPP.controller('SystemSettingController', function($scope,$window) {
    $scope.tabs = [
        {title : 'jquery' ,content : '我是jquery内容'},
        {title : 'angular' ,content : '我是angular内容'}
    ];
    $scope.alertMe = function(){
        $window.alert('html5jq-FE学习平台欢迎您!');
    };
});
XXAPP.controller('SystemShieldWordsController', function($scope) {

});
XXAPP.controller('SystemController', function($scope) {

});
XXAPP.controller('SystemInfoController', function($scope) {

});
XXAPP.controller('UserAddController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {


}]);
XXAPP.controller('UserDetailController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    

}]);
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
XXAPP.controller('UserProfileController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {


}]);
XXAPP.controller('SystemUserController', function($scope) {
    /*    $scope.$on('$includeContentLoaded', function() {
     setTimeout(function(){
     QuickSidebar.init();
     }, 2000);
     });*/
});
XXAPP.controller('VersionController', function($scope) {


});
/***
GLobal Directives
***/

// Route State Load Spinner(used on page or content load)
XXAPP.directive('ngSpinnerBar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });

                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$stateChangeSuccess', function() {
                    element.addClass('hide'); // hide spinner bar
                    $('body').removeClass('page-on-load'); // remove page loading indicator
                    Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu
                   
                    // auto scorll to page top
                    setTimeout(function () {
                        App.scrollTop(); // scroll to the top on content load
                    }, $rootScope.settings.layout.pageAutoScrollOnLoad);     
                });

                // handle errors
                $rootScope.$on('$stateNotFound', function() {
                    element.addClass('hide'); // hide spinner bar
                });

                // handle errors
                $rootScope.$on('$stateChangeError', function() {
                    element.addClass('hide'); // hide spinner bar
                });
            }
        };
    }
]);

// Handle global LINK click
XXAPP.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function(e) {
                    e.preventDefault(); // prevent link click for above criteria
                });
            }
        }
    };
});

// Handle Dropdown Hover Plugin Integration
XXAPP.directive('dropdownMenuHover', function () {
  return {
    link: function (scope, elem) {
      elem.dropdownHover();
    }
  };  
});
