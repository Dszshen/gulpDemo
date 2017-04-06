<!-- BEGIN PAGE HEADER--><div class="page-bar"><ul class="page-breadcrumb"><li><i class="fa fa-home"></i><a href="#/dashboard">首页</a><i class="fa fa-angle-right"></i></li><li><a href="#/system/permission/list">权限管理<i class="fa fa-angle-right"></i></a></li><li>添加权限</li></ul><!--.page-toolbar.btn-group.pull-right
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
                span.badge.badge-warning 12--></div><h3 class="page-title">权限添加</h3><!-- END PAGE HEADER--><!-- BEGIN MAIN CONTENT--><div class="row"><div class="col-md-12"><div class="portlet light portlet-fit portlet-form bordered"><div class="portlet-title"><div class="caption"><i class="icon-settings font-dark"></i><span class="caption-subject font-dark sbold uppercase">新增权限</span></div><!--.actions.btn-group.btn-group-devided(data-toggle='buttons')
    label.btn.btn-transparent.dark.btn-outline.btn-circle.btn-sm.active
        input#option1.toggle(type='radio', name='options')
        | Actions
    label.btn.btn-transparent.dark.btn-outline.btn-circle.btn-sm
        input#option2.toggle(type='radio', name='options')
        | Settings--></div><div class="portlet-body"><!-- BEGIN FORM--><form id="form_sample_3" action="#" class="form-horizontal"><div class="form-body"><div class="alert alert-danger display-hide"><button data-close="alert" class="close"></button> 表单信息验证未通过.</div><div class="alert alert-success display-hide"><button data-close="alert" class="close"></button> 表单验证成功!</div><div class="row"><div class="col-md-12"><div class="form-group"><label class="control-label col-md-2">权限名称<span class="required"> *</span></label><div class="col-md-4"><input type="text" name="name" data-required="1" placeholder="权限名称" class="form-control"/></div></div><div class="form-group"><label class="control-label col-md-2">权限英文名称<span class="required"> *</span></label><div class="col-md-4"><input type="text" name="name" data-required="1" placeholder="权限英文名称" class="form-control"/></div></div><div class="form-group"><label class="control-label col-md-2">是否启用<span class="required"> *</span></label><div class="col-md-4"><input type="text" name="name" data-required="1" placeholder="是否启用" class="form-control"/></div></div><div class="form-group"><label class="control-label col-md-2">权限描述</label><div class="col-md-4"><textarea type="text" name="name" rows="5" data-required="1" placeholder="权限描述" class="form-control"></textarea></div></div></div></div><div class="form-actions"><div class="row"><div class="col-md-12"><button type="submit" class="btn green">新增权限</button><button type="button" class="btn default">取消</button></div></div></div></div></form><!-- END FORM--></div><!-- END VALIDATION STATES--></div></div></div>