package com.bs3.manage.common.util;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/4/12 0012.
 */
public class SqlUtils {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(SqlUtils.class);

    @Resource
    public DataSource mySqlDataSource;

    public DataSource getDataSource() {
        System.out.print("------------mySqlDataSource----------");
        System.out.print(mySqlDataSource);
        return this.mySqlDataSource;
    }

    protected QueryRunner getQueryRunner() {
        return new QueryRunner(getDataSource());
    }

    public int update(String sql) {
        return update(sql, null);
    }

    public int update(String sql, Object param) {
        return update(sql, new Object[] { param });
    }

    public int update(String sql, Object[] params) {
        QueryRunner queryRunner = getQueryRunner();
        int affectedRows = 0;
        try {
            if (params == null) {
                affectedRows = queryRunner.update(sql);
            } else {
                affectedRows = queryRunner.update(sql, params);
            }
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to update data", e);
        }
        return affectedRows;
    }

    public int[] batchUpdate(String sql, Object[][] params) {
        QueryRunner queryRunner = getQueryRunner();
        int[] affectedRows = new int[0];
        try {
            affectedRows = queryRunner.batch(sql, params);
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to batch update data",
                    e);
        }
        return affectedRows;
    }

    public List<Map<String, Object>> find(String sql) {
        return find(sql, null);
    }

    public List<Map<String, Object>> find(String sql, Object param) {
        return find(sql, new Object[] { param });
    }

    public List<Map<String, Object>> find(String sql, Object[] params) {
        QueryRunner queryRunner = getQueryRunner();
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        try {
            if (params == null) {
                list = (List<Map<String, Object>>) queryRunner.query(sql,
                        new MapListHandler());
            } else {
                list = (List<Map<String, Object>>) queryRunner.query(sql,
                        new MapListHandler(), params);
            }
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to query data", e);
        }
        return list;
    }

    public <T> List<T> find(Class<T> entityClass, String sql) {
        return find(entityClass, sql, null);
    }

    public <T> List<T> find(Class<T> entityClass, String sql, Object param) {
        return find(entityClass, sql, new Object[] { param });
    }

    public <T> List<T> find(Class<T> entityClass, String sql, Object[] params) {
        QueryRunner queryRunner = getQueryRunner();
        List<T> list = new ArrayList<T>();
        try {
            if (params == null) {
                list = (List<T>) queryRunner.query(sql, new BeanListHandler<T>(
                        entityClass));
            } else {
                list = (List<T>) queryRunner.query(sql, new BeanListHandler<T>(
                        entityClass), params);
            }
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to query data", e);
        }
        return list;
    }

    public <T> T findFirst(Class<T> entityClass, String sql) {
        return findFirst(entityClass, sql, null);
    }

    public <T> T findFirst(Class<T> entityClass, String sql, Object param) {
        return findFirst(entityClass, sql, new Object[] { param });
    }

    public <T> T findFirst(Class<T> entityClass, String sql, Object[] params) {
        QueryRunner queryRunner = getQueryRunner();
        T object = null;
        try {
            if (params == null) {
                object = queryRunner
                        .query(sql, new BeanHandler<T>(entityClass));
            } else {
                object = queryRunner.query(sql,
                        new BeanHandler<T>(entityClass), params);
            }
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to query data", e);
        }
        return object;
    }

    public Map<String, Object> findFirst(String sql) {
        return findFirst(sql, null);
    }

    public Map<String, Object> findFirst(String sql, Object param) {
        return findFirst(sql, new Object[] { param });
    }

    public Map<String, Object> findFirst(String sql, Object[] params) {
        QueryRunner queryRunner = getQueryRunner();
        Map<String, Object> map = null;
        try {
            if (params == null) {
                map = (Map<String, Object>) queryRunner.query(sql,
                        new MapHandler());
            } else {
                map = (Map<String, Object>) queryRunner.query(sql,
                        new MapHandler(), params);
            }
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to query data", e);
        }
        return map;
    }

    public Object findBy(String sql, String columnName) {
        return findBy(sql, columnName, null);
    }

    public Object findBy(String sql, String columnName, Object param) {
        return findBy(sql, columnName, new Object[] { param });
    }

    public Object findBy(String sql, String columnName, Object[] params) {
        QueryRunner queryRunner = getQueryRunner();
        Object object = null;
        try {
            if (params == null) {
                object = queryRunner.query(sql, new ScalarHandler<Object>(
                        columnName));
            } else {
                object = queryRunner.query(sql, new ScalarHandler<Object>(
                        columnName), params);
            }
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to query data", e);
        }
        return object;
    }

    public Object findBy(String sql, int columnIndex) {
        return findBy(sql, columnIndex, null);
    }

    public Object findBy(String sql, int columnIndex, Object param) {
        return findBy(sql, columnIndex, new Object[] { param });
    }

    public Object findBy(String sql, int columnIndex, Object[] params) {
        QueryRunner queryRunner = getQueryRunner();
        Object object = null;
        try {
            if (params == null) {
                object = queryRunner.query(sql, new ScalarHandler<Object>(
                        columnIndex));
            } else {
                object = queryRunner.query(sql, new ScalarHandler<Object>(
                        columnIndex), params);
            }
        } catch (SQLException e) {
            LOGGER.error("Error occured while attempting to query data", e);
        }
        return object;
    }
}
