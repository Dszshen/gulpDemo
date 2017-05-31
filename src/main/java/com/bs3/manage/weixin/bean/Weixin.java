package com.bs3.manage.weixin.bean;

import com.belerweb.social.bean.Error;
import com.belerweb.social.bean.Result;
import com.belerweb.social.exception.SocialException;
import com.belerweb.social.weixin.api.*;
import com.belerweb.social.weixin.api.Group;
import com.belerweb.social.weixin.api.Media;
import com.belerweb.social.weixin.api.Menu;
import com.belerweb.social.weixin.api.User;
import com.belerweb.social.weixin.bean.*;
import com.bs3.manage.weixin.SDK;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.http.NameValuePair;
import org.apache.http.entity.StringEntity;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by zhangbin on 2017/5/27 0027.
 */
public final class Weixin extends SDK{
    private String appId;
    private String secret;
    private String token;
    private AccessToken accessToken;

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public AccessToken getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(AccessToken accessToken) {
        this.accessToken = accessToken;
    }
}
