package hoovjar.lambda.example;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class JavaLambdaTest1 implements RequestHandler<hoovjar.lambda.example.JavaLambdaTest1.IntegerRecord, String> {

    // Define the IntegerRecord object
    public record IntegerRecord(Integer x, Integer y, String message) {
    }

    @Override
    public String handleRequest(IntegerRecord event, Context context) {
        LambdaLogger logger = context.getLogger();
        logger.log("String found: " + event.message);
        logger.log("x param: " + event.x);
        logger.log("y param: " + event.y);
        return "The summation of x and y is " + event.x + event.y;
    }

}