package hoovjar.lambda.example;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class JavaLambdaTest2 implements RequestHandler<Void, String> {

    @Override
    public String handleRequest(Void nothing, Context context) {
        LambdaLogger logger = context.getLogger();
        logger.log("Request ID: " + context.getAwsRequestId());
        logger.log("LogGroupName: " + context.getLogGroupName());
        return "Response --> Hello world!";
    }

}