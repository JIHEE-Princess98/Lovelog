package com.jihee.lovelog;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.jihee.lovelog.domain.**.mapper")
public class LovelogBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(LovelogBackendApplication.class, args);
    }

}
