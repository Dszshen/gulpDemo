package com.bs3.manage.controller.house;

import com.bs3.manage.mongo.bean.House;
import com.bs3.manage.service.house.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

/**
 * Created by zhangbin on 2016/6/22.
 * 房产信息
 *
 */
@RestController
@RequestMapping("house")
public class HouseController {

    @Autowired
    HouseService houseService;

    @RequestMapping("save")
    public String save(){
        House house = new House();
        house.setId(UUID.randomUUID().toString());
        house.setAddr("南岸区"+(int)Math.random()*1000+1);
        houseService.saveHouse(house);
        return "success";
    }


    @RequestMapping("update")
    public String update(){

        return null;
    }
}
