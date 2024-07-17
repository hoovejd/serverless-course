#!/bin/bash

# package will use the shaded plugin to create "fat" jar that includes all necessary dependencies
mvn clean package

# Note: You only need to call lambda create-function once per function 😁

aws lambda create-function \
    --function-name java_lambda_test1 \
    --runtime java21 \
    --handler hoovjar.lambda.example.JavaLambdaTest1 \
    --role arn:aws:iam::569859221029:role/service-role/lambda_basic_execution_role \
    --zip-file fileb://./target/java_lambda_test-1.0.jar


aws lambda create-function \
    --function-name java_lambda_test2 \
    --runtime java21 \
    --handler hoovjar.lambda.example.JavaLambdaTest2 \
    --role arn:aws:iam::569859221029:role/service-role/lambda_basic_execution_role \
    --zip-file fileb://./target/java_lambda_test-1.0.jar