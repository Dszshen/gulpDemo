package com.bs3.manage.controller.weixin;

import com.bs3.manage.service.weixin.WeixinService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2017/5/25 0025.
 */
@RestController
public class WeixinApi {

    private static final String TOKEN = "";
    @Resource
    private WeixinService weixinService;
    /**
     * 验证微信请求是否成功
     * @param request
     */
    @RequestMapping(method = RequestMethod.GET, value = "/api/weixin")
    public void weixinApi(@RequestParam String signature,
                          @RequestParam String timestamp,
                          @RequestParam String nonce,
                          @RequestParam String echostr, HttpServletRequest request){
        String [] checkStr= new String[]{TOKEN,timestamp,nonce};
        String str1 = "";
        for (String str:checkStr) {
            str1+=str;
        }

        //进行sha1加密


    }
}
