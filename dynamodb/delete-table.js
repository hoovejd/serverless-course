import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb";

const dynamoDBClient = new DynamoDBClient();

const command = new DeleteTableCommand({
  TableName: "td_notes_sdk"
});
const response = await dynamoDBClient.send(command);
console.log(`Delete table response: ${JSON.stringify(response, null, 2)}`);
