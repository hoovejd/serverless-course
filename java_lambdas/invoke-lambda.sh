#!/bin/bash

# invoke lambda test1 passing event.json payload
aws lambda invoke \
    --function-name java_lambda_test1 \
    --cli-binary-format raw-in-base64-out \
    --payload file://event.json out1.json

# invoke lambda test2 with no payload
aws lambda invoke \
    --function-name java_lambda_test2 \
    --cli-binary-format raw-in-base64-out \
    out2.json