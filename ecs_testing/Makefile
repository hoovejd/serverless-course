run:
	mvn spring-boot:run

package:
	mvn -DskipTests package

test:
	mvn test

clean:
	mvn clean

docker-build:
	docker build -t hoovjar/ecs-testing .

docker-run:
	docker run ecs-testing:latest

docker-tag:
	docker tag hoovjar/ecs-testing:latest 569859221029.dkr.ecr.us-east-1.amazonaws.com/hoovjar/ecs-testing:latest

docker-push:
	docker push 569859221029.dkr.ecr.us-east-1.amazonaws.com/hoovjar/ecs-testing:latest

help:
	@echo "Usage: make [target]"
	@echo "Targets:"
	@echo "  run      Run Spring Boot app"
	@echo "  package  Build artifact (skips tests)" 
	@echo "  test     Run tests"
	@echo "  clean    Clean build artifacts"
	@echo "  help     Show this help"
