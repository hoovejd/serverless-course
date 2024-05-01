import {
  DynamoDBClient,
  ListTablesCommand,
  DescribeTableCommand
} from "@aws-sdk/client-dynamodb";

//* Note: you must first run 'aws configure sso' to setup credentials

const dynamoDBClient = new DynamoDBClient();

let response;

// const listTablesCommand = new ListTablesCommand();
// response = await dynamoDBClient.send(listTablesCommand);
// console.log(`List table names: ${response.TableNames}`);

const describeTableCommand = new DescribeTableCommand({
  TableName: "td_notes"
});
response = await dynamoDBClient.send(describeTableCommand);
console.log(`Describe td_notes table: ${JSON.stringify(response, null, 2)}`);
