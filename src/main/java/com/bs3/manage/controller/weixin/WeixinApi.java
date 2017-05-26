package com.bs3.manage.controller.weixin;

import com.belerweb.social.weixin.bean.EventType;
import com.belerweb.social.weixin.bean.Message;
import com.belerweb.social.weixin.bean.MsgType;
import com.bs3.manage.service.weixin.WeixinService;
import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;

/**
 * Created by Administrator on 2017/5/25 0025.
 */
@RestController
public class WeixinApi {

    private static final String TOKEN = "";
    @Resource
    private WeixinService weixinService;

    /**
     * 验证微信来源的有效性
     * @param signature
     * @param timestamp
     * @param nonce
     * @param echostr
     * @param request
     * @return
     */
    @RequestMapping(method = RequestMethod.GET, value = "/api/weixin")
    public ResponseEntity<byte[]> weixinApi(@RequestParam String signature,
                          @RequestParam String timestamp,
                          @RequestParam String nonce,
                          @RequestParam String echostr, HttpServletRequest request){
        if (!weixinService.validate(signature, timestamp, nonce)) {// 验证消息真实性
            return new ResponseEntity<byte[]>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<byte[]>(echostr.getBytes(), HttpStatus.OK);
    }

    /**
     * 微信post接口
     * @param signature
     * @param timestamp
     * @param nonce
     * @param request
     * @return
     * @throws IOException
     */
    @RequestMapping(method = RequestMethod.POST, value = "/api/weixin")
    public ResponseEntity<byte[]> api(@RequestParam String signature,
                                      @RequestParam String timestamp, @RequestParam String nonce, HttpServletRequest request)
            throws IOException {
        if (!weixinService.validate(signature, timestamp, nonce)) {
            return new ResponseEntity<byte[]>(HttpStatus.FORBIDDEN);
        }

        Message message = Message.parse(IOUtils.toString(request.getInputStream()));
        weixinService.saveMessage(message);// 保存消息到数据库
        if (message.getEventType() == EventType.CLICK && message.getEventKey().equals("CS")) {
            Message response = new Message(MsgType.TRANSFER_CUSTOMER_SERVICE);
            response.setToUser(message.getFromUser());
            response.setFromUser(message.getToUser());
            response.setCreateTime(new Date());
            return new ResponseEntity<byte[]>(response.toXML().getBytes(), HttpStatus.OK);
        }
        return new ResponseEntity<byte[]>(HttpStatus.OK);
    }
}
