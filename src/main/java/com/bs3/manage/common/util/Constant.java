package com.bs3.manage.common.util;

/**
 * Created by Administrator on 2017/4/13 0013.
 * 这是一个常量类
 */
public interface Constant {
    //jpaDaoHelper查询常量
    String COUNT_QUERY_PLACEHOLDER = "x";

    //数据库操作类型
    String DATABASE_OP_UPDATE="UPDATE";//更新
    String DATABASE_OP_INSERT="INSERT";//插入
    String DATABASE_OP_DELETE="DELETE";//删除
    String DATABASE_OP_SELECT="SELECT";//查询

    //网站配置常量
    String SYSTEM_CONFIG_BASE="BASE";//基本信息
    String SYSTEM_CONFIG_WEIXIN="WEIXIN";//weixin配置
    String SYSTEM_CONFIG_EMAIL="EMAIL";//邮件配置
    String SYSTEM_CONFIG_SERVER="SERVER";//服务器配置

}
