<div class="inmodal"><div class="modal-header"><h4>{{treeModal.header}}<a title="关闭" ng-click="cancel();" class="btn btn-xs pull-right"><i class="fa fa-close"></i></a></h4></div><div class="modal-body"><div class="row"><div class="col-md-12"><div class="portlet light bordered"><div class="portlet-title"><div class="caption"><i class="icon-bubble font-green-sharp"></i><span class="caption-subject font-green-sharp bold uppercase">{{treeModal.title}}</span></div><!--.actions.btn-group
    a.btn.green-haze.btn-outline.btn-circle.btn-sm(href='javascript:;', data-toggle='dropdown', data-hover='dropdown', data-close-others='true')
        | Actions
        i.fa.fa-angle-down
    ul.dropdown-menu.pull-right
        li
            a(href='javascript:;')  Option 1
        li.divider
        li
            a(href='javascript:;') Option 2
        li
            a(href='javascript:;') Option 3
        li
            a(href='javascript:;') Option 4--></div><div class="portlet-body"><!--form.form-horizontal(novalidate name='form' ng-submit='form.$valid && submit()')--><div js-tree="treeConfig" ng-model="treeData" should-apply="ignoreModelChanges()" tree="treeInstance" tree-events="ready:readyCB;create_node:createNodeCB" class="jstree"></div></div></div></div></div></div><div class="modal-footer"><button type="submit" class="btn btn-primary">确定</button></div></div><!--.modal(tabindex='-1', aria-hidden='true').modal-dialog
    .modal-content
        .modal-header
            button.close(type='button', data-dismiss='modal', aria-hidden='true')
            h4.modal-title Responsive & Scrollable
        .modal-body
            .scroller(style='height:300px', data-always-visible='1', data-rail-visible1='1')
                .row
                    .col-md-6
                        h4 Some Input
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                    .col-md-6
                        h4 Some More Input
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
                        p
                            input.col-md-12.form-control(type='text')
        .modal-footer
            button.btn.dark.btn-outline(type='button', data-dismiss='modal') Close
            button.btn.green(type='button') Save changes-->