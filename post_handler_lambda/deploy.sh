#!/bin/bash

ZIP_NAME=calculator.zip
S3_BUCKET=serverless-course-bucket
LAMBDA_FUNCTION=handlePostEvent

echo -e "\nZipping necessary files..."
zip $ZIP_NAME -r index.mjs

echo -e "\nUploading $ZIP_NAME to S3 Bucket=s3://$S3_BUCKET"
aws s3 cp $ZIP_NAME s3://$S3_BUCKET

echo -e "\nDeploying to Lambda Function=$LAMBDA_FUNCTION"
aws lambda update-function-code --function-name $LAMBDA_FUNCTION --s3-bucket $S3_BUCKET --s3-key $ZIP_NAME --publish > /dev/null