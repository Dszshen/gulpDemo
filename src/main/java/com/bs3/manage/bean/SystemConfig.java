package com.bs3.manage.bean;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by Administrator on 2017/4/12 0012.
 */
@Entity
@Table(name = "sys_config")
public class SystemConfig {
    @Id
    @GenericGenerator(name = "generator", strategy = "uuid")
    @GeneratedValue(generator = "generator")
    @Column(name="id")
    private String id;

    //

}
