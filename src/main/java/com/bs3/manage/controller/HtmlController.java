package com.bs3.manage.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author zhangbin
 */
@Controller
public class HtmlController {

    private static final Logger LOGGER = Logger.getLogger(HtmlController.class);

    @RequestMapping("/**/*.html")
    public void html() {
    }

    @RequestMapping("/")
    public String index() {
        return "template/main";
    }

}

