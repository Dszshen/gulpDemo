package com.bs3.manage.weixin;

import com.bs3.manage.weixin.bean.Weixin;

/**
 * Created by zhangbin on 2017/5/29 0029.
 */
public abstract class API {
    protected Weixin weixin;

    public Weixin getWeixin() {
        return weixin;
    }

    public void setWeixin(Weixin weixin) {
        this.weixin = weixin;
    }
}
