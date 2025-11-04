package com.demo.testapp;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {

    @GetMapping("/hello")
    public Map<String, String> hello() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from Spring Boot!");
        response.put("status", "success");
        response.put("timestamp", String.valueOf(System.currentTimeMillis()));
        return response;
    }

    @PostMapping("/echo")
    public Map<String, String> echo(@RequestBody Map<String, String> payload) {
        Map<String, String> response = new HashMap<>();
        String message = payload.getOrDefault("message", "");
        response.put("echo", "Server received: " + message);
        response.put("originalMessage", message);
        response.put("length", String.valueOf(message.length()));
        response.put("status", "success");
        return response;
    }

    @GetMapping("/status")
    public Map<String, Object> status() {
        Map<String, Object> response = new HashMap<>();
        response.put("backend", "Spring Boot");
        response.put("status", "running");
        response.put("javaVersion", System.getProperty("java.version"));
        response.put("springBootVersion", "3.2.0");
        return response;
    }
}
