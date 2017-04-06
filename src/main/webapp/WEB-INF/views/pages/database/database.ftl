<!-- BEGIN PAGE HEADER--><div class="page-bar"><ul class="page-breadcrumb"><li><a href="#/dashboard">首页</a><i class="fa fa-circle"></i></li><li><span>数据库设计</span><i class="fa fa-circle"></i></li><li><span>系统数据库表</span></li></ul><!--.page-toolbar.btn-group.pull-right
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
                span.badge.badge-warning 12--></div><h3 class="page-title">系统数据库表<!--small 角色/权限/用户 表--></h3><!-- END PAGE HEADER--><!-- BEGIN MAIN CONTENT--><div class="row"><div class="col-md-12"><div data-ng-bind-html="database" class="wiki"></div></div></div>