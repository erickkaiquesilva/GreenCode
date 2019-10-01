package com.greencode.demo.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer{

	public void addCorsMapping(CorsRegistry registry) {
		registry.addMapping("/**").allowedMethods("GET","POST","PUT","PUT","DELETE","OPTIONS","HEAD","TRACE","CONNECT");
	}
}