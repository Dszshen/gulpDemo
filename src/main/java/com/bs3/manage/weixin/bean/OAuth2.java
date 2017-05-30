package com.bs3.manage.weixin.bean;

import com.belerweb.social.bean.Result;
import com.belerweb.social.weixin.bean.AccessToken;
import com.belerweb.social.weixin.bean.Scope;
import com.bs3.manage.weixin.API;
import org.apache.commons.lang.StringUtils;
import org.apache.http.NameValuePair;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by zhangbin on 2017/5/29 0029.
 */
public final class OAuth2 extends API{
    OAuth2(Weixin weixin) {
        super(weixin);
    }

    public String authorize() {
        return this.authorize(Boolean.valueOf(false));
    }

    public String authorize(Boolean wechatRedirect) {
        return this.authorize(this.weixin.getRedirectUri(), wechatRedirect);
    }

    public String authorize(String redirectUri) {
        return this.authorize(redirectUri, Boolean.valueOf(false));
    }

    public String authorize(String redirectUri, Boolean wechatRedirect) {
        return this.authorize(this.weixin.getAppId(), redirectUri, "code", Scope.SNSAPI_USERINFO, (String)null, wechatRedirect);
    }

    public String authorize(String appId, String redirectUri, String responseType, Scope scope, String state, Boolean wechatRedirect) {
        List<NameValuePair> params = new ArrayList();
        this.weixin.addParameter(params, "appid", appId);
        this.weixin.addParameter(params, "redirect_uri", redirectUri);
        this.weixin.addParameter(params, "response_type", responseType);
        this.weixin.addParameter(params, "scope", scope);
        this.weixin.addNotNullParameter(params, "state", state);
        String result = "https://open.weixin.qq.com/connect/oauth2/authorize?" + StringUtils.join(params, "&");
        if(Boolean.TRUE.equals(wechatRedirect)) {
            result = result + "#wechat_redirect";
        }

        return result;
    }

    public Result<AccessToken> accessToken(String code) {
        return this.accessToken(this.weixin.getAppId(), this.weixin.getSecret(), code);
    }

    public Result<AccessToken> accessToken(String appId, String secret, String code) {
        return this.accessToken(appId, secret, code, "authorization_code");
    }

    public Result<AccessToken> accessToken(String appId, String secret, String code, String grantType) {
        List<NameValuePair> params = new ArrayList();
        this.weixin.addParameter(params, "appid", appId);
        this.weixin.addParameter(params, "secret", secret);
        this.weixin.addParameter(params, "code", code);
        this.weixin.addParameter(params, "grant_type", grantType);
        String result = this.weixin.get("https://api.weixin.qq.com/sns/oauth2/access_token", params);
        return Result.parse(result, AccessToken.class);
    }

    public Result<AccessToken> refreshAccessToken(String refreshToken) {
        return this.refreshAccessToken(this.weixin.getAppId(), "refresh_token", refreshToken);
    }

    public Result<AccessToken> refreshAccessToken(String appId, String refreshToken) {
        return this.refreshAccessToken(appId, "refresh_token", refreshToken);
    }

    public Result<AccessToken> refreshAccessToken(String appId, String grantType, String refreshToken) {
        List<NameValuePair> params = new ArrayList();
        this.weixin.addParameter(params, "appid", appId);
        this.weixin.addParameter(params, "grant_type", grantType);
        this.weixin.addParameter(params, "refresh_token", refreshToken);
        String result = this.weixin.get("https://api.weixin.qq.com/sns/oauth2/refresh_token", params);
        return Result.parse(result, AccessToken.class);
    }

}
