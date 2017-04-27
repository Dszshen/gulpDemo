package com.bs3.manage.controller.system;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.bean.Role;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.service.system.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by zhangbin on 2016/6/26.
 * 角色管理
 */
@RestController
@RequestMapping("role")
public class RoleController {

    @Autowired
    public RoleService roleService;

    @RequestMapping(method = RequestMethod.GET,value="add")
    public JsonResult add(@RequestBody Role role){
        return JsonResult.success(roleService.addRole(role));
    }

    /**
     * 获取角色列表
     * @return
     */
    @RequestMapping("list")
    public JsonResult<List<Role>> list(){
        return roleService.list();
    }

    /**
     * 获取分组角色信息
     * @return
     */
    @RequestMapping("rolesGroupList")
    public JsonResult rolesGroupList(){
        return roleService.getGroupRoles();
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
    @RequestMapping("getRolesOfUser")
    public JsonResult getRolesOfUser(@RequestParam Map<String,String> params){
        String userId = params.get("userId");
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
        String rolesIds = params.getString("rolesIds");
        String rolesGroup = params.getString("rolesGroup");
        //String roleIds = rolesIds.toString();
        return JsonResult.success(roleService.updateRoleOfUser(userId,rolesIds,0,rolesGroup));
    }

}
