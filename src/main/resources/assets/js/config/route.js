/* 所有页面的路由跳转 */
XXAPP.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // 如果没有匹配到url请求就跳转到欢迎页
    $urlRouterProvider.otherwise("/login");

    //封装$stateProvider.state方法
    var state = function (name, url, ctrl, tmpl, abs, data,resolve) {
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
        if(resolve){
            state.resolve = resolve;
        }

        $stateProvider.state(name,state);
    };


    var lazyLoadFiles = function($ocLazyLoad,name,css,cssFiles,jsId,jsFiles){


        return {};
    };


    //登录注册
    state('login','/login','LoginController','/pages/login.html',false,{ pageTitle: '登录'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'login',
                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                files: [
                    CONTEXT+'/assets/css/pages/login.css'
                ]
            });
        }]
    });
    state('register','/register','RegisterController','/pages/register.html',false,{ pageTitle: '注册'});
    //欢迎页面
    state('index','/index','AppController','template/index.html',true);

    state('index.dashboard','/dashboard','DashboardController','/pages/dashboard.html',false,{ pageTitle: '欢迎页'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
                name: 'XXAPP',
                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                files: [
                    CONTEXT+'/assets/plugins/morrisjs/morris.css',
                    CONTEXT+'/assets/plugins/morrisjs/morris.min.js',
                    CONTEXT+'/assets/plugins/raphael/raphael-min.js',
                    CONTEXT+'/assets/plugins/jquery-sparkline/dist/jquery.sparkline.min.js',

                    CONTEXT+'/assets/js/scripts/pages/dashboard.min.js'
                    //'/assets/js/controllers/DashboardController.js'
                ]
            });
        }]
    });

    //----------------------------------------------系统管理  start----------------------------------------
    //系统管理-->>>系统参数设置
    state('sys','/system','SystemController','/template/index.html',true);
    state('sys.setting','/setting','SystemSettingController','/pages/system/setting.html',false,{ pageTitle: '系统参数设置'});
    state('sys.info','/info','SystemInfoController','/pages/system/info.html',false,{ pageTitle: 'XX公司信息'});

    //系统管理-->>>用户管理
    state('sys.user','/user','SystemUserController','<ui-view></ui-view>',true);
    state('sys.user.list','/list','UserListController','/pages/system/user/manage/list.html',false,{ pageTitle: '用户列表'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'userListCss',
                insertBefore: '#css_lazyload',
                files: [
                    '/assets/plugins/DataTables/datatables.min.css',
                    '/assets/plugins/DataTables/plugins/bootstrap/datatables.bootstrap.css'
                ]
            },{
                name: 'userListJs',
                insertBefore: '#js_lazyload',
                files: [
                    '/assets/plugins/DataTables/datatables.all.min.js',
                    "/assets/plugins/jstree/dist/jstree.min.js",
                    '/assets/js/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });


    state('sys.user.add','/add','UserAddController','/pages/system/user/manage/add.html',false,{ pageTitle: '增加用户'});
    state('sys.user.detail','/detail','UserDetailController','/pages/system/user/manage/detail.html',false,{ pageTitle: '用户资料'});

    /*用户中心*/
    state('sys.user.profile','/profile','UserProfileController','/pages/system/user/personal/profile.html',false,{ pageTitle: '个人信息'});

    //系统管理-->>>角色管理
    state('sys.role','/role','SystemRoleController','<ui-view></ui-view>',true);
    state('sys.role.list','/list','RoleListController','/pages/system/role/list.html',false,{ pageTitle: '角色列表'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'roleManage',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT+'/assets/plugins/DataTables/datatables.min.css',
                    CONTEXT+'/assets/plugins/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT+'/assets/plugins/DataTables/datatables.all.min.js',
                    //CONTEXT+'/assets/plugins/angular-bootstrap-switch/dist/angular-bootstrap-switch.min.js',
                    CONTEXT+'/assets/js/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    state('sys.role.add','/add','RoleAddController','/pages/system/role/add.html',false,{ pageTitle: '增加角色'});
    state('sys.role.detail','/detail','RoleDetailController','/pages/system/role/detail.html',false,{ pageTitle: '角色详情'});


    //系统管理-->>>权限管理
    state('sys.permission','/permission','SystemPermissionController','<ui-view></ui-view>',true);
    state('sys.permission.list','/list','PermissionListController','/pages/system/permission/list.html',false,{ pageTitle: '权限列表'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'permissionManage',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT+'/assets/plugins/DataTables/datatables.min.css',
                    CONTEXT+'/assets/plugins/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT+'/assets/plugins/DataTables/datatables.all.min.js',
                    CONTEXT+'/assets/js/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    state('sys.permission.add','/add','PermissionAddController','/pages/system/permission/add.html',false,{ pageTitle: '增加权限'});
    //菜单管理
    //state('sys.menu','/user','SystemMenuController','<ui-view></ui-view>',true);
    state('sys.menu','/menu','SystemMenuController','/pages/system/menu/menu.html',false,{ pageTitle: '菜单管理'});
    //栏目管理
    state('sys.column','/column','SystemColumnController','/pages/system/column.html',false,{ pageTitle: '栏目管理'});
    //数据字典
    state('sys.dictionary','/dictionary','SystemDictionaryController','/pages/system/dictionary.html',false,{ pageTitle: '数据字典'});
    //系统日志
    state('sys.logs','/logs','SystemLogsController','/pages/system/logs.html',false,{ pageTitle: '系统日志'});
    //屏蔽词
    state('sys.shieldWords','/shieldWords','SystemShieldWordsController','/pages/system/shieldWords.html',false,{ pageTitle: '屏蔽词'});

    //----------------------------------------------系统管理  end------------------------------------------------


    //----------------------------------------------房产信息管理  start--------------------------------------------
    state('house','/house','HouseController','/template/index.html',true);
    state('house.add','/add','HouseAddController','/pages/house/add.html',false,{ pageTitle: '新增房产信息'});
    state('house.list','/list','HouseListController','/pages/house/list.html',false,{ pageTitle: '房产信息'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'houseList',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT+'/assets/plugins/DataTables/datatables.min.css',
                    CONTEXT+'/assets/plugins/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT+'/assets/plugins/DataTables/datatables.all.min.js',
                    CONTEXT+'/assets/js/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    //产权变更
    state('house.changeTitle','/changeTitle','HouseChangeTitleController','/pages/house/changeTitle.html',false,{ pageTitle: '房屋产权变更'});
    state('house.drawing','/drawing','HouseDrawingController','/pages/house/drawing.html',false,{ pageTitle: '房间状态图示'});
    //----------------------------------------------房产信息管理  end----------------------------------------------


    //----------------------------------------------业主管理  start--------------------------------------------
    state('homeowner','/homeowner','HomeownerController','/template/index.html',true);
    state('homeowner.add','/add','OwnerAddController','/pages/homeowner/add.html',false,{ pageTitle: '业主迁入'});
    state('homeowner.out','/out','OwnerOutController','/pages/homeowner/out.html',false,{ pageTitle: '业主迁出'});
    state('homeowner.list','/list','OwnerListController','/pages/homeowner/list.html',false,{ pageTitle: '房间档案信息'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'homeownerList',
                insertBefore: '#ng_load_plugins_before',
                files: [
                    CONTEXT+'/assets/plugins/DataTables/datatables.min.css',
                    CONTEXT+'/assets/plugins/DataTables/plugins/bootstrap/datatables.bootstrap.css',
                    CONTEXT+'/assets/plugins/DataTables/datatables.all.min.js',
                    CONTEXT+'/assets/js/scripts/table-datatables-managed.js'
                ]
            }]);
        }]
    });
    state('homeowner.decoration','/decoration','OwnerDecorationController','/pages/homeowner/decoration.html',false,{ pageTitle: '业主装修'});
    state('homeowner.liveHistory','/liveHistory','OwnerLiveHistoryController','/pages/homeowner/liveHistory.html',false,{ pageTitle: '业主入住历史'});
    state('homeowner.repair','/repair','OwnerRepairController','/pages/homeowner/repair.html',false,{ pageTitle: '业主请修'});
    state('homeowner.addBuilding','/addBuilding','OwnerAddBuildingController','/pages/homeowner/addBuilding.html',false,{ pageTitle: '业主加建'});
    state('homeowner.complaint','/complaint','OwnerComplaintController','/pages/homeowner/complaint.html',false,{ pageTitle: '业主投诉'});
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
    state('api','/api','ApiController','/template/index.html',true);
    state('api.dev','/dev','ApiDevCtrl','/pages/api/dev.html',false,{ pageTitle: '开发文档'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'markdownIt',
                files: [
                    CONTEXT+'/assets/css/wiki.css',
                    CONTEXT+'/assets/plugins/markdown-it/dist/markdown-it.min.js'
                ]
            }]);
        }]
    });
    state('api.open','/open','ApiOpenCtrl','/pages/api/open.html',false,{ pageTitle: '开放文档'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'markdownIt',
                files: [
                    CONTEXT+'/assets/css/wiki.css',
                    CONTEXT+'/assets/plugins/markdown-it/dist/markdown-it.min.js'
                ]
            }]);
        }]
    });
    //----------------------------------------------API文档管理  end------------------------------------------------

    //----------------------------------------------数据库设计  start----------------------------------------------
    state('database','/database','DatabaseController','/template/index.html',true);
    state('database.api','/api','DatabaseApiController','/pages/database/database.html',false,{ pageTitle: '数据库设计'},{
        deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([{
                name: 'markdownIt',
                files: [
                    CONTEXT+'/assets/css/wiki.css',
                    CONTEXT+'/assets/plugins/markdown-it/dist/markdown-it.min.js'
                ]
            }]);
        }]
    });
    //----------------------------------------------数据库设计  end------------------------------------------------
    

}]);