package com.bs3.manage.controller.system;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.common.util.Constant;
import com.bs3.manage.service.system.SystemService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by zhangbin on 2016/6/26.
 * 系统管理
 *
 */
@RestController
@RequestMapping("sys")
public class SystemController {
    @Resource
    private SystemService systemService;

    @RequestMapping(method= RequestMethod.POST,value="base/add")
    public Integer save(@RequestBody JSONObject params){
        //String[] baseParams = (String[])params.toArray();
        return systemService.setConfig(Constant.SYSTEM_CONFIG_BASE,params,Constant.DATABASE_OP_INSERT);
    }
}
