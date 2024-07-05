#!/bin/bash

# package will use the shaded plugin to create "fat" jar that includes all necessary dependencies
mvn clean package

aws lambda create-function \
    --function-name java_lambda_test1 \
    --runtime java21 \
    --handler hoovjar.lambda.example.JavaLambdaTest1 \
    --role arn:aws:iam::569859221029:role/service-role/lambda_basic_execution_role \
    --zip-file fileb://./target/java_lambda_test1-1.0.jar
