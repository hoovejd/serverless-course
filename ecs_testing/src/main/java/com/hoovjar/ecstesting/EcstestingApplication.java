package com.hoovjar.ecstesting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import lombok.extern.slf4j.Slf4j;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.time.Instant;

@Slf4j
@SpringBootApplication
@EnableScheduling
public class EcstestingApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcstestingApplication.class, args);
	}

	@Scheduled(fixedRateString = "${app.scheduler.fixedRate:60000}")
	public void runScheduledTask() throws UnknownHostException {
		log.info("Scheduled task executed at {} from IP address {}", Instant.now(), InetAddress.getLocalHost().getHostAddress());
	}

}
