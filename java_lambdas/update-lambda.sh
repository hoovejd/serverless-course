#!/bin/bash

# package will use the shaded plugin to create "fat" jar that includes all necessary dependencies
mvn clean package

aws lambda update-function-code \
    --function-name java_lambda_test1 \
    --zip-file fileb://./target/java_lambda_test-1.0.jar

aws lambda update-function-code \
    --function-name java_lambda_test2 \
    --zip-file fileb://./target/java_lambda_test-1.0.jar