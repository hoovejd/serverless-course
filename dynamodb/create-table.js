import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

const dynamoDBClient = new DynamoDBClient();

const input = {
  AttributeDefinitions: [
    {
      AttributeName: "user_id",
      AttributeType: "S"
    },
    {
      AttributeName: "timestamp",
      AttributeType: "N"
    }
  ],
  KeySchema: [
    {
      AttributeName: "user_id",
      KeyType: "HASH"
    },
    {
      AttributeName: "timestamp",
      KeyType: "RANGE"
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: "td_notes_sdk"
};

const command = new CreateTableCommand(input);
const response = await dynamoDBClient.send(command);
console.log(`Create table response: ${JSON.stringify(response, null, 2)}`);
