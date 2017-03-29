package com.bs3.manage.controller;

import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.service.system.UserService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 *
 * @author zhangbin
 *
 */
@RestController
public class LoginController {

    @Resource
    private UserService userService;

    /**
     * 登陆系统
     * @param loginInfo
     * @return 返回登陆信息
     */
    @RequestMapping("login")
    public JsonResult<JSONObject> login(@RequestBody JSONObject loginInfo){

        return userService.login(loginInfo);
    }

}
