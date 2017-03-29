package com.bs3.manage.dao;

import com.bs3.manage.bean.Role;
import com.bs3.manage.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * Created by zhangbin on 2016/7/4.
 */
public interface RoleDao extends JpaRepository<Role, String>, JpaSpecificationExecutor<Role> {


}
