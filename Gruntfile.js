"use strict";

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        project: {
            javascript: {
                all: ['src/main/resources/assets/js/**/*.js'],
                app: [
                    'src/main/resources/assets/js/main.js',
                    'src/main/resources/assets/js/globalConfig.js',
                    'src/main/resources/assets/js/route.js',
                    'src/main/resources/assets/js/controllers/**/*.js',
                    'src/main/resources/assets/js/directives/**/*.js'
                ]
            }
        },
        less: {
            build: {
                files: {
                    /*"src/main/webapp/assets/css/style.css": "src/main/resources/less/style.less"*/
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: {
                    /**
                     * 功能模块
                     */
                    /**公用页面**/
                    "src/main/webapp/WEB-INF/views/common/modal/tree_modal.ftl": ["src/main/resources/jade/common/modal/tree_modal.jade"],

                    /*注册登录页面*/
                    "src/main/webapp/WEB-INF/views/pages/login.ftl": ["src/main/resources/jade/pages/login.jade"],
                    "src/main/webapp/WEB-INF/views/pages/register.ftl": ["src/main/resources/jade/pages/register.jade"],
                    /*整体框架页面*/
                    "src/main/webapp/WEB-INF/views/template/main.ftl": ["src/main/resources/jade/template/main.jade"],
                    "src/main/webapp/WEB-INF/views/template/index.ftl": ["src/main/resources/jade/template/index.jade"],
                    "src/main/webapp/WEB-INF/views/template/header.ftl": ["src/main/resources/jade/template/header.jade"],
                    "src/main/webapp/WEB-INF/views/template/footer.ftl": ["src/main/resources/jade/template/footer.jade"],
                    "src/main/webapp/WEB-INF/views/template/sidebar.ftl": ["src/main/resources/jade/template/sidebar.jade"],
                    "src/main/webapp/WEB-INF/views/template/quick-sidebar.ftl": ["src/main/resources/jade/template/quick-sidebar.jade"],
                    "src/main/webapp/WEB-INF/views/template/theme-panel.ftl": ["src/main/resources/jade/template/theme-panel.jade"],
                    /*欢迎页*/
                    "src/main/webapp/WEB-INF/views/pages/dashboard.ftl": ["src/main/resources/jade/pages/dashboard.jade"],
                    
                    /*
                     * 其他页面
                    */

                    /*系统管理*/
                    "src/main/webapp/WEB-INF/views/pages/system/setting.ftl": ["src/main/resources/jade/pages/system/setting.jade"],
                    //"src/main/webapp/WEB-INF/views/pages/system/info.ftl": ["src/main/resources/jade/pages/system/info.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/column.ftl": ["src/main/resources/jade/pages/system/column.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/dictionary.ftl": ["src/main/resources/jade/pages/system/dictionary.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/logs.ftl": ["src/main/resources/jade/pages/system/logs.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/shieldWords.ftl": ["src/main/resources/jade/pages/system/shieldWords.jade"],
                    //菜单管理
                    "src/main/webapp/WEB-INF/views/pages/system/menu/menu.ftl": ["src/main/resources/jade/pages/system/menu/menu.jade"],
                    //系统管理--角色管理
                    "src/main/webapp/WEB-INF/views/pages/system/role/list.ftl": ["src/main/resources/jade/pages/system/role/list.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/role/add.ftl": ["src/main/resources/jade/pages/system/role/add.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/role/detail.ftl": ["src/main/resources/jade/pages/system/role/detail.jade"],
                    //"src/main/webapp/WEB-INF/views/pages/system/role/modal/role_pms.ftl": ["src/main/resources/jade/pages/system/role/modal/role_pms.jade"],
                    //系统管理--权限管理
                    "src/main/webapp/WEB-INF/views/pages/system/permission/list.ftl": ["src/main/resources/jade/pages/system/permission/list.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/permission/add.ftl": ["src/main/resources/jade/pages/system/permission/add.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/permission/detail.ftl": ["src/main/resources/jade/pages/system/permission/detail.jade"],
                    //系统管理--用户管理
                    "src/main/webapp/WEB-INF/views/pages/system/user/manage/list.ftl": ["src/main/resources/jade/pages/system/user/manage/list.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/user/manage/add.ftl": ["src/main/resources/jade/pages/system/user/manage/add.jade"],
                    "src/main/webapp/WEB-INF/views/pages/system/user/manage/detail.ftl": ["src/main/resources/jade/pages/system/user/manage/detail.jade"],
                    //"src/main/webapp/WEB-INF/views/pages/system/user/modal/user_role.ftl": ["src/main/resources/jade/pages/system/user/modal/user_role.jade"],

                    //用户中心
                    "src/main/webapp/WEB-INF/views/pages/system/user/personal/profile.ftl": ["src/main/resources/jade/pages/system/user/personal/profile.jade"],


                    /*房产管理*/
                    "src/main/webapp/WEB-INF/views/pages/house/add.ftl": ["src/main/resources/jade/pages/house/add.jade"],
                    "src/main/webapp/WEB-INF/views/pages/house/changeTitle.ftl": ["src/main/resources/jade/pages/house/changeTitle.jade"],
                    "src/main/webapp/WEB-INF/views/pages/house/list.ftl": ["src/main/resources/jade/pages/house/list.jade"],
                    "src/main/webapp/WEB-INF/views/pages/house/drawing.ftl": ["src/main/resources/jade/pages/house/drawing.jade"],
                    /*业主管理*/
                    "src/main/webapp/WEB-INF/views/pages/homeowner/add.ftl": ["src/main/resources/jade/pages/homeowner/add.jade"],
                    "src/main/webapp/WEB-INF/views/pages/homeowner/out.ftl": ["src/main/resources/jade/pages/homeowner/out.jade"],
                    "src/main/webapp/WEB-INF/views/pages/homeowner/list.ftl": ["src/main/resources/jade/pages/homeowner/list.jade"],
                    "src/main/webapp/WEB-INF/views/pages/homeowner/addBuilding.ftl": ["src/main/resources/jade/pages/homeowner/addBuilding.jade"],
                    "src/main/webapp/WEB-INF/views/pages/homeowner/decoration.ftl": ["src/main/resources/jade/pages/homeowner/decoration.jade"],
                    "src/main/webapp/WEB-INF/views/pages/homeowner/liveHistory.ftl": ["src/main/resources/jade/pages/homeowner/liveHistory.jade"],
                    "src/main/webapp/WEB-INF/views/pages/homeowner/repair.ftl": ["src/main/resources/jade/pages/homeowner/repair.jade"],
                    "src/main/webapp/WEB-INF/views/pages/homeowner/complaint.ftl": ["src/main/resources/jade/pages/homeowner/complaint.jade"],
                    /*销售管理*/

                    /*费用管理*/

                    /**
                     * 项目管理--开发接口等
                     */
                    /*API文档*/
                    "src/main/webapp/WEB-INF/views/pages/api/dev.ftl": ["src/main/resources/jade/pages/api/dev.jade"],
                    "src/main/webapp/WEB-INF/views/pages/api/open.ftl": ["src/main/resources/jade/pages/api/open.jade"],

                    /*数据库表设计*/
                    "src/main/webapp/WEB-INF/views/pages/database/database.ftl": ["src/main/resources/jade/pages/database/database.jade"]
                }
            }
        },
        /*clean:{
            js: ['src/main/webapp/assets/js/app.js']
        },*/
        jshint: {
            /*options: {
                strict: false,
                laxbreak: true,
                loopfunc: true,
                debug: true,
                globals: {
                    angular: true,
                    $: true,
                    _: true
                }
            },*/
            jshintrc: '.jshintrc',
            all: '<%= project.javascript.app %>'
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '\n'
            },
            dist: {
                src: '<%= project.javascript.app %>',
                dest: 'target/assets/js/app.js'
            }
        },
        copy: {
            main: {
                nonull: true,
                files: [
                    {
                         expand: true,
                         cwd: 'bower_components/',
                         src: '**',
                         dest: 'target/assets/plugins'
                     },
                    {
                        expand: true,
                        cwd: "src/main/resources/assets/plugins/",
                        src: '**',
                        dest: 'target/assets/plugins'
                    },
                    {
                        expand: true,
                        cwd: "src/main/resources/assets/css/",
                        src: '**',
                        dest: 'target/assets/css'
                    },
                    {
                        expand: true,
                        cwd: "src/main/resources/assets/fonts/",
                        src: '**',
                        dest: 'target/assets/fonts'
                    },
                    {
                        expand: true,
                        cwd: "src/main/resources/assets/images/",
                        src: '**',
                        dest: 'target/assets/images'
                    },
                    {
                        expand: true,
                        cwd: "src/main/resources/assets/md/",
                        src: '**',
                        dest: 'target/assets/md'
                    },
                    {
                        expand: true,
                        cwd: "src/main/resources/assets/js/scripts/",
                        src: '**',
                        dest: 'target/assets/js/scripts'
                    }
                ]
            }
        },
        watch: {
            //styles: {
            //    files: ['src/main/resources/**/*.less'],
            //    tasks: ['less'],
            //    options: {
            //        nospawn: true
            //    }
            //},
            jade: {
                files: ['src/main/resources/**/*.jade'],
                tasks: ['jade'],
                options: {
                    nospawn: true
                }
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['default']
            },
            javascript: {
                files: '<%= project.javascript.app %>',
                tasks: ['jshint', 'concat']
            },
            copy: {
                files: [
                    'bower_components/**/*'
                    /*, 'src/main/resources/assets/javascript/!**!/!*'*/
                    , 'src/main/resources/assets/plugins/**/*'
                    ,'src/main/resources/assets/css/**/*'
                    ,'src/main/resources/assets/images/**/*'
                    ,'src/main/resources/assets/md/**/*'
                    ,'src/main/resources/assets/js/scripts/**/*'
                ],
                tasks: ['copy']
            }
        },
        concurrent: {
            target: {
                tasks: ['watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });
    //grunt.loadNpmTasks('grunt-contrib-clean');//clean 插件
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    //grunt.registerTask('default', ['copy', 'jade', 'less', 'jshint', 'concat']);
    grunt.registerTask('default', ['copy', 'jade', 'jshint', 'concat']);
};