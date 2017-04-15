package com.bs3.manage.controller.system;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.common.util.Constant;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.service.system.SystemService;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(method= RequestMethod.GET,value="base")
    public JsonResult getBase(@RequestParam("id") String id){
        JSONObject params = new JSONObject();
        params.put("id",id);
        return systemService.config(Constant.SYSTEM_CONFIG_BASE,params,Constant.DATABASE_OP_SELECT);
    }

    @RequestMapping(method= RequestMethod.POST,value="base")
    public JsonResult baseAdd(@RequestBody JSONObject params){
        return systemService.config(Constant.SYSTEM_CONFIG_BASE,params,Constant.DATABASE_OP_INSERT);
    }

    @RequestMapping(method= RequestMethod.PUT,value="base")
    public JsonResult baseUpdate(@RequestBody JSONObject params){
        return systemService.config(Constant.SYSTEM_CONFIG_BASE,params,Constant.DATABASE_OP_UPDATE);
    }
}
