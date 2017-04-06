<!-- BEGIN PAGE HEADER--><div class="page-bar"><ul class="page-breadcrumb"><li><i class="fa fa-home"></i><a href="#/dashboard">首页</a><i class="fa fa-angle-right"></i></li><li><a href="#/system/role/list">角色管理<i class="fa fa-angle-right"></i></a></li><li>角色列表</li></ul><!--.page-toolbar.btn-group.pull-right
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
                span.badge.badge-warning 12--></div><h3 class="page-title">角色管理</h3><!-- END PAGE HEADER--><!-- BEGIN MAIN CONTENT--><div class="row"><ui-view></ui-view><div class="col-md-12"><!-- BEGIN EXAMPLE TABLE PORTLET--><div class="portlet light bordered"><div class="portlet-title"><div class="caption font-dark"><i class="icon-settings font-dark"></i><span class="caption-subject bold uppercase"> 角色列表</span></div><div class="actions"><div data-toggle="buttons" class="btn-group btn-group-devided"><label class="btn btn-transparent dark btn-outline btn-circle btn-sm active"><input id="option1" type="radio" name="options" class="toggle"/>Actions</label><label class="btn btn-transparent dark btn-outline btn-circle btn-sm"><input id="option2" type="radio" name="options" class="toggle"/>Settings</label></div></div></div><div class="portlet-body"><div class="table-toolbar"><div class="row"><div class="col-md-6"><div class="btn-group"><a id="addRole" href="#/system/role/add" class="btn sbold green"><i class="fa fa-plus"></i>新增角色</a></div></div><div class="col-md-6"><div class="btn-group pull-right"><button data-toggle="dropdown" class="btn green btn-outline dropdown-toggle">更多功能<i class="fa fa-angle-down"></i></button><ul class="dropdown-menu pull-right"><li><a href="javascript:;"><i class="fa fa-print"></i> 打印</a></li><li><a href="javascript:;"><i class="fa fa-file-pdf-o"></i> 保存为PDF</a></li><li><a href="javascript:;"><i class="fa fa-file-excel-o"></i> 导出为Excel</a></li></ul></div></div></div></div><table id="tableList" class="table table-striped table-bordered table-hover table-checkable order-column"><thead><tr><th><input type="checkbox" data-set="#tableList .checkboxes" class="group-checkable"/></th><th> 角色名称</th><th> 角色英文名称</th><th> 角色生成时间</th><th> 角色更新时间</th><th> 角色禁用时间</th><th> 角色状态</th><th> 配置权限</th><th> 操作</th></tr></thead><tbody><tr ng-repeat="role in roles" class="odd gradeX"><td><input type="checkbox" value="1" class="checkboxes"/></td><td> {{role.role_cn}}</td><td> {{role.role_en}}</td><td> {{role.createTime | date:'yyyy-MM-dd HH:mm:ss'}}</td><td> {{role.updateTime | date:'yyyy-MM-dd HH:mm:ss'}}</td><td> {{role.forbidTime | date:'yyyy-MM-dd HH:mm:ss'}}</td><td><input type="checkbox" checked="" data-size="small" data-on-color="info" data-off-color="success" data-on-text="启用" data-off-text="禁用" class="make-switch"/></td><td class="center"><button ng-click="addPermission();" class="btn btn-xs btn-success">配置权限</button></td><td><button class="btn btn-xs btn-success">编辑</button><button class="btn btn-xs btn-danger">删除</button></td></tr></tbody></table></div></div></div></div><!-- END MAIN CONTENT--><!-- BEGIN MAIN JS--><script>TableDatatablesManaged.init();</script><!-- END MAIN JS-->