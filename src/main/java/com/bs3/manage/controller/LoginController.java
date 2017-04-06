package com.bs3.manage.controller;

import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.service.system.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

/**
 *
 * @author zhangbin
 * 登陆接口
 *
 */
@Controller
public class LoginController {

    @Resource
    private UserService userService;

    /**
     *
     * @return 登陆静态页面
     */
    @RequestMapping("login.html")
    public String loginPage(){
        return "login";
    }

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
