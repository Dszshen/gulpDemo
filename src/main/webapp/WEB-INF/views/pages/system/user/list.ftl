<!-- BEGIN PAGE HEADER--><div class="page-bar"><ul class="page-breadcrumb"><li><i class="fa fa-home"></i><a href="#/dashboard">首页</a><i class="fa fa-angle-right"></i></li><li><a href="#/system/user/list">用户管理<i class="fa fa-angle-right"></i></a></li><li>用户列表</li></ul><!--.page-toolbar.btn-group.pull-right
    button.btn.btn-sm.btn-default.dropdown-toggle(type='button', data-toggle='dropdown', data-hover='dropdown', data-delay='1000', data-close-others='true')
        | Actions
        i.fa.fa-angle-down
    ul.dropdown-menu.pull-right(role='menu')
        li
            a(href='#')
                i.icon-user
                |  New User
        li
            a(href='#')
                i.icon-present
                |  New Event
                span.badge.badge-success 4
        li
            a(href='#')
                i.icon-basket
                |  New order
        li.divider
        li
            a(href='#')
                i.icon-flag
                |  Pending Orders
                span.badge.badge-danger 4
        li
            a(href='#')
                i.icon-users
                |  Pending Users
                span.badge.badge-warning 12--></div><h3 class="page-title">用户管理</h3><!-- END PAGE HEADER--><!-- BEGIN MAIN CONTENT--><div class="row"><div class="col-md-12"><!-- BEGIN EXAMPLE TABLE PORTLET--><div class="portlet light bordered"><div class="portlet-title"><div class="caption font-dark"><i class="icon-settings font-dark"></i><span class="caption-subject bold uppercase"> 用户列表</span></div><div class="actions"><div data-toggle="buttons" class="btn-group btn-group-devided"><label class="btn btn-transparent dark btn-outline btn-circle btn-sm active"><input id="option1" type="radio" name="options" class="toggle"/>Actions</label><label class="btn btn-transparent dark btn-outline btn-circle btn-sm"><input id="option2" type="radio" name="options" class="toggle"/>Settings</label></div></div></div><div class="portlet-body"><div class="table-toolbar"><div class="row"><div class="col-md-6"><div class="btn-group"><a id="addUser" href="#/system/user/add" ng-click="addUser();" class="btn sbold green"><i class="fa fa-plus"></i>新增用户</a></div></div><div class="col-md-6"><div class="btn-group pull-right"><button data-toggle="dropdown" class="btn green btn-outline dropdown-toggle">更多功能<i class="fa fa-angle-down"></i></button><ul class="dropdown-menu pull-right"><li><a href="javascript:;"><i class="fa fa-print"></i> 打印</a></li><li><a href="javascript:;"><i class="fa fa-file-pdf-o"></i> 保存为PDF</a></li><li><a href="javascript:;"><i class="fa fa-file-excel-o"></i> 导出为Excel</a></li></ul></div></div></div></div><table id="tableList" class="table table-striped table-bordered table-hover table-checkable order-column"><thead><tr><th><input type="checkbox" data-set="#tableList .checkboxes" class="group-checkable"/></th><th> 用户名</th><th> 昵称</th><th> 真实姓名</th><th> 手机号</th><th> 邮箱</th><th> QQ</th><th> 注册时间</th><th> 添加角色</th><th> 操作</th></tr></thead><tbody><tr class="odd gradeX"><td><input type="checkbox" value="1" class="checkboxes"/></td><td> admin</td><td> 超级管理员</td><td> superman</td><td> 18888888888</td><td> email@email.com</td><td> 12345678</td><td> 2016-04-05 16:05:06</td><td><button ng-click="addRole();" class="btn btn-xs btn-success">添加角色</button></td><td><span class="label label-sm label-success">编辑</span><span class="label label-sm label-danger">删除</span></td></tr></tbody></table></div></div></div></div><!-- END MAIN CONTENT--><!-- BEGIN MAIN JS--><script>TableDatatablesManaged.init();</script><!-- END MAIN JS-->