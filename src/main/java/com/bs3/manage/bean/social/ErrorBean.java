package com.bs3.manage.bean.social;

import com.belerweb.social.bean.Result;
import org.json.JSONObject;

/**
 * Created by zhangbin on 2017/5/27 0027.
 */
public final class ErrorBean extends JsonBean{
    private String request;
    private String errorCode;
    private String error;

    public ErrorBean() {
    }

    public ErrorBean(String code, String message) {
        this.errorCode = code;
        this.error = message;
    }

    private ErrorBean(JSONObject jsonObject) {
        super(jsonObject);
    }

    public String getRequest() {
        return this.request;
    }

    public void setRequest(String request) {
        this.request = request;
    }

    public String getErrorBeanCode() {
        return this.errorCode;
    }

    public void setErrorBeanCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorBean() {
        return this.error;
    }

    public void setErrorBean(String error) {
        this.error = error;
    }

    public String toString() {
        return this.errorCode + ":" + this.error + "(" + this.request + ")";
    }

    public static ErrorBean parse(JSONObject jsonObject) {
        String errorCode = jsonObject.optString("error_code", (String)null);
        String error;
        ErrorBean er;
        if(errorCode != null) {
            error = jsonObject.optString("request", (String)null);
            error = jsonObject.optString("error", (String)null);
            er = new ErrorBean(jsonObject);
            er.setRequest(error);
            er.setErrorBeanCode(errorCode);
            er.setErrorBean(error);
            return er;
        } else {
            errorCode = jsonObject.optString("error", (String)null);
            if(errorCode != null) {
                error = jsonObject.optString("error_description", (String)null);
                ErrorBean er1 = new ErrorBean(jsonObject);
                er1.setErrorBeanCode(errorCode);
                er1.setErrorBean(error);
                return er1;
            } else {
                Integer ret = Result.parseInteger(jsonObject.opt("ret"));
                if(ret != null && ret.intValue() != 0) {
                    error = jsonObject.optString("msg", (String)null);
                    er = new ErrorBean(jsonObject);
                    er.setErrorBeanCode(ret.toString());
                    er.setErrorBean(error);
                    return er;
                } else {
                    ret = Result.parseInteger(jsonObject.opt("errcode"));
                    if(ret != null && ret.intValue() != 0) {
                        error = jsonObject.optString("errmsg", (String)null);
                        er = new ErrorBean(jsonObject);
                        er.setErrorBeanCode(ret.toString());
                        er.setErrorBean(error);
                        return er;
                    } else {
                        return null;
                    }
                }
            }
        }
    }
}
