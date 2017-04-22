package com.bs3.manage.dao;

import com.bs3.manage.bean.Role;
import com.bs3.manage.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

/**
 * Created by zhangbin on 2016/7/4.
 */
public interface RoleDao extends JpaRepository<Role, String>, JpaSpecificationExecutor<Role> {

    /**
     * 添加用户角色
     * @param userId
     * @param roleId
     * @param defaultRole
     * @param roleGroup
     * @return
     */
    @Query(value="INSERT INTO auth_user_role(user_id,role_id,default_role,role_group) values (:id,:userId,:roleId,:defaultRole,:roleGroup)",nativeQuery = true)
    public Integer addRoleToUser(String userId,String roleId,Integer defaultRole,String roleGroup);

    /**
     * 更新用户角色
     * @param userId
     * @param roleId
     * @param defaultRole
     * @param roleGroup
     * @return
     */
    @Modifying
    @Query(value="UPDATE auth_user_role SET user_id=:userId,role_id=:roleId,default_role=:defaultRole,role_group=:roleGroup WHERE user_id=:userId",nativeQuery = true)
    public Integer updateRoleToUser(String userId,String roleId,Integer defaultRole,String roleGroup);

    /**
     * 通过id查询用户角色
     * @param userId
     * @return
     */
    @Query(value="SELECT role_id FROM auth_user_role WHERE user_id=:userId",nativeQuery = true)
    public String getRolesOfUser(String userId);


}
