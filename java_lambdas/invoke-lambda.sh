#!/bin/bash

aws lambda invoke \
    --function-name java_lambda_test1 \
    --cli-binary-format raw-in-base64-out \
    --payload file://event.json out1.json

aws lambda invoke \
    --function-name java_lambda_test2 \
    --cli-binary-format raw-in-base64-out \
    --payload file://event.json out2.json