package com.bs3.manage.service.system;

import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.bean.Role;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.dao.RoleDao;
import com.bs3.manage.service.BaseService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Created by zhangbin on 2016/6/15.
 */
@Service
public class RoleService extends BaseService{

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
     * 通过id获取角色信息
     * @param id
     * @return
     */
    public Role getRoleById(String id){
        return roleDao.findOne(id);
    }

    /**
     * 添加角色
     * @param role
     * @return
     */
    public Role addRole(Role role){
        return roleDao.saveAndFlush(role);
    }

    /**
     * 更新角色信息
     * @param role
     * @return
     */
    public Integer updateRole(JSONObject role){
        List<String> fields = new ArrayList<String>();
        fields.add("id");
        fields.add("en");
        fields.add("cn");
        fields.add("state");
        fields.add("description");
        fields.add("updateTime");
        String sql = "";
        String opStr = "";
        ArrayList<String> arrayList = new ArrayList<String>();
        for (int i=0;i<fields.size();i++){
            if((i+1)!=fields.size()){
                opStr+=fields.get(i+1).toString()+"=?,";
                arrayList.add(i,role.getString(fields.get(i+1).toString()));
            }
        }
        opStr=opStr.substring(0,opStr.length()-1);
        sql = "UPDATE auth_role SET "+opStr+" WHERE id='"+role.getString("id")+"'";
        Object[] opParams = arrayList.toArray();
        return update(sql,opParams);
    }

    /**
     *添加用户角色
     * @param userId 用户id
     * @param roleId 角色id
     * @param defaultRole 默认角色
     * @param roleGroup 角色组
     * @return
     */
    public Integer addRoleToUser(String userId,String roleId,Integer defaultRole,String roleGroup){
        return roleDao.addRoleToUser(userId,roleId,null,null);
    }

    /**
     * 通过用户id获取用户角色
     * @param userId
     * @return
     */
    public String[] getRolesOfUser(String userId){
        String[] roleIdList = roleDao.getRolesOfUser(userId).split(",");
        /*for(int i=0;i<roleIdList.length;i++){
            Role role = roleDao.findOne(roleIdList[i]);
        }*/
        return roleIdList;
    }

    /**
     * 更新用户角色信息
     * @param userId 用户id
     * @param roleId 角色id
     * @param defaultRole 暂时不用，保留字段
     * @param roleGroup 暂时不用，保留字段
     * @return
     */
    public Integer updateRoleOfUser(String userId,String roleId,String defaultRole,String roleGroup){
        return roleDao.updateRoleToUser(userId,roleId,null,null);
    }

}
