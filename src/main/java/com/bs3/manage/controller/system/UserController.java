package com.bs3.manage.controller.system;

import com.bs3.manage.bean.User;
import com.bs3.manage.service.system.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by zhangbin on 2016/6/26.
 * 用户管理
 *
 */
@RestController
@RequestMapping("system/user")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("add")
    public User addUser(@RequestParam("user") User user){

        User u = userService.add(user);

        return u;
    }

}
