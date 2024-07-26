This project is for testing Java version 21 lambdas. 

*Tip: You can package multiple lambdas together in a single jar*

Useful links:
- [Deploy Java Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/java-package.html)
- https://github.com/awsdocs/aws-lambda-developer-guide/blob/main/sample-apps/java17-examples/src/main/java/example/HandlerIntegerJava17.java
- https://docs.aws.amazon.com/lambda/latest/dg/java-handler.html
- https://docs.aws.amazon.com/lambda/latest/dg/lambda-java.html
- https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/java_lambda_code_examples.html


# Deploy using SAM
[SAM Hello World Tutorial](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html)

- Build with `sam build`
- Deploy with `sam deploy --guided` 
- Deploy using samconfig.toml presets: `sam deploy`
- Once deployed, invoke a lambda with: `same remote invoke LAMBDAFUNCTIONNAME`
- Clean up (remove cloudformation stack and S3 artifacts): `sam delete`