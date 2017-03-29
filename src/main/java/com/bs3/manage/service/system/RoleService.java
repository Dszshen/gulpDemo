package com.bs3.manage.service.system;

import com.bs3.manage.bean.Role;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.dao.RoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

}
