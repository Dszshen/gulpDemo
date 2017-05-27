package com.bs3.manage.bean.social;

import org.json.JSONObject;

/**
 * Created by Administrator on 2017/5/27 0027.
 */
public abstract class JsonBean {
    private JSONObject jsonObject;

    protected JsonBean() {
    }

    protected JsonBean(JSONObject jsonObject) {
        this.jsonObject = jsonObject;
    }

    public JSONObject getJsonObject() {
        return this.jsonObject;
    }
}
