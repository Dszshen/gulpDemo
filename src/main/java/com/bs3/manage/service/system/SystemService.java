package com.bs3.manage.service.system;

import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.common.util.Constant;
import com.bs3.manage.service.BaseService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.UUID;

/**
 * Created by zhangbin on 2016/6/26.
 */
@Service
public class SystemService extends BaseService{

    //private static final SqlUtils sqlUtils = new SqlUtils();

    /**
     *
     * @param type 设置类型
     * @param params 设置参数
     * @param opType 操作数据库类型，默认为update
     */
    public int setConfig(String type, JSONObject params, String opType){
        if(StringUtils.isBlank(opType)){
            opType = Constant.DATABASE_OP_UPDATE;
        }
        //sql语句
        String sql = "";

        if(StringUtils.isNotBlank(type)){
            if(type.equals(Constant.SYSTEM_CONFIG_BASE)){

                if(opType.equals(Constant.DATABASE_OP_INSERT)){
                    sql = "insert into company_info(id,name,addr,employees,main_business,legal_person,create_date,description) values (?,?,?,?,?,?,?,?)";
                    //sqlUtils.update(sql,params);
                    String[] baseParams = new String[]{
                            UUID.randomUUID().toString(),
                            params.getString("name"),
                            params.getString("addr"),
                            params.getString("employees"),
                            params.getString("main_business"),
                            params.getString("legal_person"),
                            params.getString("create_date"),
                            params.getString("desc")
                    };

                    //System.out.println(baseParams.toString());

                    return insert(sql,baseParams);
                }

            }else if(type.equals(Constant.SYSTEM_CONFIG_WEIXIN)){

            }else if(type.equals(Constant.SYSTEM_CONFIG_SERVER)){

            }
        }
        return 0;
        //sqlUtils.insert(sql,params);
    }


}
