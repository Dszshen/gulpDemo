package com.bs3.manage.dao;

import com.bs3.manage.bean.Role;
import com.bs3.manage.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

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
    Integer addRoleToUser(@Param("userId")String userId,@Param("roleId")String roleId,@Param("defaultRole")Integer defaultRole,@Param("roleGroup")String roleGroup);

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
    Integer updateRoleToUser(@Param("userId") String userId, @Param("roleId")String roleId, @Param("defaultRole")Integer defaultRole, @Param("roleGroup")String roleGroup);

    /**
     * 通过id查询用户角色
     * @param userId
     * @return
     */
    @Query(value="SELECT user_id,role_id,default_role,role_group FROM auth_user_role WHERE user_id=:userId",nativeQuery = true)
    List getRolesOfUser(@Param("userId") String userId);


}
