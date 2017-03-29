package com.bs3.manage.service.house;

import com.bs3.manage.mongo.bean.House;
import com.bs3.manage.mongo.dao.HouseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

/**
 * Created by zhangbin on 2016/6/22.
 */
@Service
public class HouseService {

    //@Autowired
    //MongoTemplate mongoTemplate;
    @Autowired
    public HouseDao houseDao;

    public void saveHouse(House house){

        //mongoTemplate.save(house);
        houseDao.save(house);
    }

}
