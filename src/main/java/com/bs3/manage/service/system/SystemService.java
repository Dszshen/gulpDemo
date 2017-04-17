package com.bs3.manage.service.system;

import com.alibaba.fastjson.JSONObject;
import com.bs3.manage.common.util.Constant;
import com.bs3.manage.common.util.JsonResult;
import com.bs3.manage.service.BaseService;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * Created by zhangbin on 2016/6/26.
 * 系统管理service
 */
@Service
public class SystemService extends BaseService {

    private static final Logger LOGGER = Logger.getLogger(SystemService.class);

    /**
     * @param type   设置类型
     * @param params 设置参数
     * @param opType 操作数据库类型，默认为update
     */
    public JsonResult config(String type, JSONObject params, String opType) {
        if (StringUtils.isBlank(opType)) {
            opType = Constant.DATABASE_OP_UPDATE;
        }
        //sql语句
        String sql = "";

        if (StringUtils.isNotBlank(type)) {
            if (type.equals(Constant.SYSTEM_CONFIG_BASE)) {
                if (opType.equals(Constant.DATABASE_OP_SELECT)) {
                    sql = "SELECT * FROM config_company WHERE id=?";
                    return JsonResult.success(find(sql, params.get("id")));
                } else if (opType.equals(Constant.DATABASE_OP_INSERT)) {
                    sql = "INSERT INTO config_company(id,name,addr,employees,main_business,tel,mobile_number,legal_person,create_date,description) values (?,?,?,?,?,?,?,?,?,?)";
                    String[] baseParams = new String[]{
                            UUID.randomUUID().toString(),
                            params.getString("name"),
                            params.getString("addr"),
                            params.getString("employees"),
                            params.getString("main_business"),
                            params.getString("tel"),
                            params.getString("mobile_number"),
                            params.getString("legal_person"),
                            params.getString("create_date"),
                            params.getString("description")
                    };
                    return JsonResult.success(insert(sql, baseParams));
                } else if (opType.equals(Constant.DATABASE_OP_UPDATE)) {
                    sql = "UPDATE config_company SET name=?,addr=?,employees=?,main_business=?,tel=?,mobile_number=?,legal_person=?,create_date=?,description=? WHERE id='" + params.getString("id") + "'";
                    String[] baseParams = new String[]{
                            params.getString("name"),
                            params.getString("addr"),
                            params.getString("employees"),
                            params.getString("main_business"),
                            params.getString("tel"),
                            params.getString("mobile_number"),
                            params.getString("legal_person"),
                            params.getString("create_date"),
                            params.getString("description")
                    };
                    return JsonResult.success(update(sql, baseParams));
                }
            } else if (type.equals(Constant.SYSTEM_CONFIG_SECURITY)) {
                if (opType.equals(Constant.DATABASE_OP_SELECT)) {
                    sql = "SELECT * FROM config_security WHERE id=?";
                    return JsonResult.success(find(sql, params.get("id")));
                } else if (opType.equals(Constant.DATABASE_OP_INSERT)) {
                    sql = "INSERT INTO config_security(id,white_list,forbid_list,max_conn) values (?,?,?,?)";
                    String[] baseParams = new String[]{
                            UUID.randomUUID().toString(),
                            params.getString("white_list"),
                            params.getString("forbid_list"),
                            params.getString("max_conn")
                    };
                    return JsonResult.success(insert(sql, baseParams));
                } else if (opType.equals(Constant.DATABASE_OP_UPDATE)) {
                    sql = "UPDATE config_security SET white_list=?,forbid_list=?,max_conn=? WHERE id='" + params.getString("id") + "'";
                    String[] baseParams = new String[]{
                            params.getString("white_list"),
                            params.getString("forbid_list"),
                            params.getString("max_conn")
                    };
                    return JsonResult.success(update(sql, baseParams));
                }
            } else if (type.equals(Constant.SYSTEM_CONFIG_SERVER)) {

            }
        }
        return JsonResult.failure("对不起，操作失败！", null);
    }


}
