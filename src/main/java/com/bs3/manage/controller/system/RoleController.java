package com.bs3.manage.controller.system;

import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.bean.Role;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.service.system.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by zhangbin on 2016/6/26.
 * 角色管理
 */
@RestController
@RequestMapping("role")
public class RoleController {

    @Autowired
    public RoleService roleService;

    @RequestMapping("list")
    public JsonResult<List<Role>> list(){
        return roleService.list();
    }

    /**
     * 更新角色
     * @param role
     * @return
     */
    @RequestMapping("update")
    public JsonResult updateRole(@RequestBody JSONObject role){
        return JsonResult.success(roleService.updateRole(role));
    }

    /**
     * 获取用户角色列表
     * @param params
     * @return
     */
    @RequestMapping("getRoleOfUser")
    public JsonResult getRoleOfUser(@RequestBody JSONObject params){
        String userId = params.getString("userId");
        return JsonResult.success(roleService.getRolesOfUser(userId));
    }

    /**
     * 为用户添加角色
     * @param params
     * @return
     */
    @RequestMapping("addRoleOfUser")
    public JsonResult addRoleOfUser(@RequestBody JSONObject params){
        String userId = params.getString("userId");
        String roleIds = params.getString("roleIds");
        return JsonResult.success(roleService.addRoleToUser(userId,roleIds,null,null));
    }

    /**
     * 更新用户角色信息
     * @param params
     * @return
     */
    @RequestMapping("updateRoleOfUser")
    public JsonResult updateRoleOfUser(@RequestBody JSONObject params){
        String userId = params.getString("userId");
        String roleIds = params.getString("roleIds");
        return JsonResult.success(roleService.updateRoleOfUser(userId,roleIds,null,null));
    }

}
