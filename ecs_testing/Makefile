run:
	mvn spring-boot:run

package:
	mvn -DskipTests package

test:
	mvn test

clean:
	mvn clean

docker-build:
	docker build -t ecs-testing:latest .

docker-run:
	docker run ecs-testing:latest

help:
	@echo "Usage: make [target]"
	@echo "Targets:"
	@echo "  run      Run Spring Boot app"
	@echo "  package  Build artifact (skips tests)" 
	@echo "  test     Run tests"
	@echo "  clean    Clean build artifacts"
	@echo "  help     Show this help"
