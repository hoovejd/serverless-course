package com.hoovjar.ecstesting;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import lombok.extern.slf4j.Slf4j;

import java.net.InetAddress;
import java.time.Instant;

@Slf4j
@SpringBootApplication
public class EcstestingApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EcstestingApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		log.info("Command line task executed at {} from IP address {}", Instant.now(), InetAddress.getLocalHost().getHostAddress());
	}

}
