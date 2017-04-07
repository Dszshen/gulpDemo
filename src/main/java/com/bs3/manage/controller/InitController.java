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
public class InitController {

    @Resource
    private UserService userService;

}
