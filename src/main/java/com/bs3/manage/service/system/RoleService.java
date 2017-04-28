package com.bs3.manage.service.system;

import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.bean.Role;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.common.util.JsonobjectToBean;
import com.bs3.manage.dao.RoleDao;
import com.bs3.manage.service.BaseService;
import com.mongodb.util.JSON;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.util.*;

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
     * 按照角色组获取分组角色
     * @return
     */
    public JsonResult getGroupRoles(){
        List<Role> list = roleDao.findAll();
        String roleGroupFlag = "",roleGroupName="";
        JSONObject rolesGroup = new JSONObject();
        List<Role> roleList = new ArrayList<Role>();
        List rolesGroupResult = new ArrayList();
        for(int i=0;i<list.size();i++){
            if(i==0){
                roleGroupFlag = list.get(i).getRoleGroup();
                roleGroupName = list.get(i).getRoleGroupDesc();
            }

            if(list.get(i).getRoleGroup().equals(roleGroupFlag)){
                roleList.add(list.get(i));
            }else{
                rolesGroup.put("roleGroup",roleGroupFlag);
                rolesGroup.put("roleGroupName",roleGroupName);
                rolesGroup.put("items",roleList);
                rolesGroupResult.add(rolesGroup);
                roleList = new ArrayList<Role>();
                roleList.add(list.get(i));
                roleGroupFlag = list.get(i).getRoleGroup();
                roleGroupName = list.get(i).getRoleGroupDesc();
                rolesGroup = new JSONObject();
            }

            if((i+1)==list.size()){
                rolesGroup.put("roleGroup",roleGroupFlag);
                rolesGroup.put("roleGroupName",roleGroupName);
                rolesGroup.put("items",roleList);
                rolesGroupResult.add(rolesGroup);
            }
        }
        return JsonResult.success(rolesGroupResult);
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
        role.setCreateTime(new Date());
        return roleDao.saveAndFlush(role);
    }

    /**
     * 获取角色组信息
     * @return
     */
    public JsonResult getRoleGroups(){
        List list = roleDao.getRoleGroups();
        List groupsList = new ArrayList();
        for(int i=0;i<list.size();i++){
            Object[] obj = (Object[])list.get(i);
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("groupId",obj[0]);
            jsonObject.put("groupName",obj[1]);
            groupsList.add(jsonObject);
        }
        return JsonResult.success(groupsList);
    }

    /**
     * 更新角色信息
     * @param role
     * @return
     */
    public JsonResult updateRole(JSONObject role){
        /*List<String> fields = new ArrayList<String>();
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
        Object[] opParams = arrayList.toArray();*/
        Integer res = roleDao.updateRole(role.getInteger("id"),
                role.getString("cn"),
                role.getString("en"),
                role.getInteger("state"),
                role.getString("description"),
                new Date(),
                role.getInteger("state").equals(0)?new Date():null,
                role.getString("roleGroup"),
                role.getString("roleGroupDesc")
                );
        return JsonResult.success(res);
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
    public JSONObject getRolesOfUser(String userId){
        List rolesOfUser = roleDao.getRolesOfUser(userId);
        JSONObject jsonObject = new JSONObject();
        Object[] list = (Object[])rolesOfUser.get(0);
        jsonObject.put("userId",list[0]);
        jsonObject.put("rolesIds",list[1]);
        jsonObject.put("defaultRole",list[2]);
        jsonObject.put("groupRoles",list[3]);
        return jsonObject;
    }

    /**
     * 更新用户角色信息
     * @param userId 用户id
     * @param roleId 角色id
     * @param defaultRole 暂时不用，保留字段
     * @param roleGroup 暂时不用，保留字段
     * @return
     */
    @Transactional
    public Integer updateRoleOfUser(String userId,String roleId,Integer defaultRole,String roleGroup){
        return roleDao.updateRoleToUser(userId,roleId,0,roleGroup);
    }

}
