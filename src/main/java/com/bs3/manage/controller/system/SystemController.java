package com.bs3.manage.controller.system;

import com.bs3.manage.common.util.Constant;
import com.bs3.manage.service.system.SystemService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by zhangbin on 2016/6/26.
 * 系统管理
 *
 */
@RestController
@RequestMapping("system")
public class SystemController {
    @Resource
    private SystemService systemService;

    @RequestMapping("add")
    public void save(){
        systemService.setConfig(Constant.SYSTEM_CONFIG_BASE,null,Constant.DATABASE_OP_INSERT);
    }
}
