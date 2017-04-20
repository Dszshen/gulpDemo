package com.bs3.manage.service.system;

import com.bs3.manage.bean.Role;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.dao.RoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * Created by zhangbin on 2016/6/15.
 */
@Service
public class RoleService {

    @Autowired
    public RoleDao roleDao;

    /**
     * 获取所有的role
     * @return
     */
    public JsonResult<List<Role>> list(){

        List<Role> list = roleDao.findAll();

        JsonResult<List<Role>> jsonResult = JsonResult.success(list);

        return  jsonResult;
    }

    /**
     *
     * @param userId 用户id
     * @param roleId 角色id
     * @param default_role 默认角色
     * @param role_group 角色组
     * @return
     */
    public Integer addRoleToUser(String userId,String roleId,Integer default_role,String role_group){
        roleDao.addRoleToUser(userId,roleId,default_role,role_group);
        return 0;
    }

    /**
     * 更新角色信息
     * @param id id
     * @param userId
     * @param roleId
     * @param default_role
     * @param role_group
     * @return
     */
    private Integer updateRoleOfUser(String id,String userId,String roleId,Integer default_role,String role_group){
        return roleDao.updateRoleToUser(id,userId,roleId,default_role,role_group);
    }

}
