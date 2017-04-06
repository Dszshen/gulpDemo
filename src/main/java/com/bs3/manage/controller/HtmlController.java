package com.bs3.manage.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author zhangbin
 * If a html page is just a static page, then you can define it here.
 */
@Controller
public class HtmlController {

    private static final Logger LOGGER = Logger.getLogger(HtmlController.class);
    //@RequestMapping(value={"**.html","/**/*.html"})
    @RequestMapping("/**/**.html")
    public void html() {
    }

    @RequestMapping("main")
    public String template() {
        //检查是否登陆，如果没有登陆，则跳转到登陆页面
        return "template/main";
    }

    @RequestMapping("/")
    public String index() {
        //检查是否登陆，如果没有登陆，则跳转到登陆页面
        if(false){
            return "redirect:/main";
        }else{
            return "login";
        }
    }
}

