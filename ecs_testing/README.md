# Docker image for ecstesting

Quick steps to build the jar and Docker image for this Spring Boot application.

1) Build the JAR locally (from repo root):

```bash
mvn package -DskipTests
```

This produces a runnable JAR in `target/` (e.g. `target/ecstesting-0.0.1-SNAPSHOT.jar`).

2) Build the Docker image:

```bash
docker build -t ecstesting:latest .
```

3) Run the container:

```bash
docker run -p 8080:8080 ecstesting:latest
```

Notes:
- The `Dockerfile` copies `target/*.jar` into the image, so make sure `mvn package` runs before `docker build`.
- If you prefer an image that also builds the project (multi-stage), tell me and I can add it.
