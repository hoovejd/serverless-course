package hoovjar.lambda.example;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import software.amazon.awssdk.services.lambda.LambdaClient;
import software.amazon.awssdk.services.lambda.model.GetAccountSettingsResponse;
import software.amazon.awssdk.services.lambda.model.LambdaException;

public class JavaLambdaTest3 implements RequestHandler<Void, String> {

    private static final LambdaClient lambdaClient = LambdaClient.builder().build();

    @Override
    public String handleRequest(Void nothing, Context context) {
        LambdaLogger logger = context.getLogger();
        logger.log("Request ID: " + context.getAwsRequestId());
        logger.log("LogGroupName: " + context.getLogGroupName());
        GetAccountSettingsResponse response = null;

        try {
            response = lambdaClient.getAccountSettings();
        } catch (LambdaException e) {
            logger.log(e.getMessage());
        }

        return response != null
                ? "Total code size for your account is " + response.accountLimit().totalCodeSize() + " bytes"
                : "Error";
    }

}
