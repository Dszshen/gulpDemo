package com.bs3.manage.service.weixin;

import com.belerweb.social.weixin.api.Weixin;
import com.belerweb.social.weixin.bean.Message;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by Administrator on 2017/5/25 0025.
 */
@Service
public class WeixinService {

    @Resource
    private Weixin weixin;

    /**
     * 验证微信来源的有效性
     * @param signature
     * @param timestamp
     * @param nonce
     * @return
     */
    public boolean validate(String signature, String timestamp, String nonce) {
        return weixin.validate(signature, timestamp, nonce);
    }

    public boolean saveMessage(Message message) {
        //boolean success = weixinMpMessageDao.insert(message) == 1;
        //synchronized (this) {
            //notify();
        //}
        //LOGGER.debug("notify mp message response process.");
        return true;
    }

}
