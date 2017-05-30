package com.bs3.manage.bean.social;

import com.bs3.manage.exceptions.WeixinException;
import org.json.JSONArray;
import org.json.JSONObject;

import java.lang.reflect.Method;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

/**
 * Created by zhangbin on 2017/5/29 0029.
 */
public class Result<T> {
    private Error error;
    private T result;
    private List<T> results;


}
