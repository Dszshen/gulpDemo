package com.bs3.manage.mongo.dao;

import com.bs3.manage.mongo.bean.House;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by zhangbin on 2016/6/14.
 */
@Repository
public interface HouseDao extends MongoRepository<House,String>{

}
