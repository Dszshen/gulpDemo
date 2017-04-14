package com.bs3.manage.service.system;

import com.bs3.manage.common.util.Constant;
import com.bs3.manage.common.util.SqlUtils;
import com.bs3.manage.service.BaseService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

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
    public int  setConfig(String type, String[] params,String opType){
        if(StringUtils.isBlank(opType)){
            opType = Constant.DATABASE_OP_UPDATE;
        }
        //sql语句
        String sql = "";

        if(StringUtils.isNotBlank(type)){
            if(type.equals(Constant.SYSTEM_CONFIG_BASE)){

                if(opType.equals(Constant.DATABASE_OP_INSERT)){
                    sql = "insert into sys_config(id,name) values ('"+ UUID.randomUUID()+"','公司名称')";
                    //sqlUtils.update(sql,params);
                    return insert(sql,params);
                }

            }else if(type.equals(Constant.SYSTEM_CONFIG_WEIXIN)){

            }else if(type.equals(Constant.SYSTEM_CONFIG_SERVER)){

            }
        }
        return 0;
        //sqlUtils.insert(sql,params);
    }
}
