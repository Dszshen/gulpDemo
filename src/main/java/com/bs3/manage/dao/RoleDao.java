package com.bs3.manage.dao;

import com.bs3.manage.bean.Role;
import com.bs3.manage.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

/**
 * Created by zhangbin on 2016/7/4.
 */
public interface RoleDao extends JpaRepository<Role, String>, JpaSpecificationExecutor<Role> {

    @Query("INSERT INTO auth_user_role(userid,roleid,default_role,role_group) values (:id,:userId,:roleId,:default_role,:role_group)")
    public Integer addRoleToUser(String userId,String roleId,Integer default_role,String role_group);


    @Query("UPDATE auth_user_role SET user_id=:userId,role_id=:roleId,default_role=:default_role,role_group=:role_group WHERE id=:id")
    public Integer updateRoleToUser(String id,String userId,String roleId,Integer default_role,String role_group);
}
