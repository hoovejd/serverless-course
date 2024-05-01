import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb";

const dynamoDBClient = new DynamoDBClient();

const command = new UpdateTableCommand({
  TableName: "td_notes_sdk",
  ProvisionedThroughput: { ReadCapacityUnits: 2, WriteCapacityUnits: 1 }
});
const response = await dynamoDBClient.send(command);
console.log(`Update table response: ${JSON.stringify(response, null, 2)}`);
