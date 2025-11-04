package com.demo.testapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200")
public class TestApplication {

    public static void main(String[] args) {
        SpringApplication.run(TestApplication.class, args);
        System.out.println("\n===========================================");
        System.out.println("Spring Boot Application Started Successfully!");
        System.out.println("Server running at: http://localhost:8080");
        System.out.println("===========================================\n");
    }
}
