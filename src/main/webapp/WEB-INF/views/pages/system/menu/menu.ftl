<!-- BEGIN PAGE HEADER--><div class="page-bar"><ul class="page-breadcrumb"><li><i class="fa fa-home"></i><a href="#/dashboard">首页</a><i class="fa fa-angle-right"></i></li><li><a href="#/system/menu">菜单管理<i class="fa fa-angle-right"></i></a></li><li>菜单管理</li></ul><!--.page-toolbar.btn-group.pull-right
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
                span.badge.badge-warning 12--></div><h3 class="page-title">菜单管理</h3><!-- END PAGE HEADER--><!-- BEGIN MAIN CONTENT--><div class="row"><div class="col-md-12"><div class="portlet light portlet-fit portlet-form bordered"><div class="portlet-title"><div class="caption"><i class="icon-settings font-dark"></i><span class="caption-subject font-dark sbold uppercase">菜单管理</span></div><!--.actions.btn-group.btn-group-devided(data-toggle='buttons')
    label.btn.btn-transparent.dark.btn-outline.btn-circle.btn-sm.active
        input#option1.toggle(type='radio', name='options')
        | Actions
    label.btn.btn-transparent.dark.btn-outline.btn-circle.btn-sm
        input#option2.toggle(type='radio', name='options')
        | Settings--></div><div class="portlet-body"><div ui-tree=""><ol ui-tree-nodes="" ng-model="menus"><li ng-repeat="item in menus" ui-tree-node=""><div ui-tree-handle="">{{item.title}}</div><ol ui-tree-nodes="" ng-model="item.nodes"><li ng-repeat="subItem in item.nodes" ui-tree-node=""><div ui-tree-handle="">{{subItem.title}}</div></li></ol></li></ol></div></div></div></div></div>