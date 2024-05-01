import {
  DynamoDBClient,
  BatchGetItemCommand,
  BatchWriteItemCommand
} from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const putCommand = new PutCommand({
  TableName: "td_notes_sdk",
  Item: {
    user_id: "dd",
    timestamp: 3,
    title: "my title",
    content: "sdk added content"
  }
});

const getCommand = new GetCommand({
  TableName: "td_notes_sdk",
  Key: {
    user_id: "cc",
    timestamp: 2
  }
});

const updateCommand = new UpdateCommand({
  TableName: "td_notes_sdk",
  Key: {
    user_id: "cc",
    timestamp: 2
  },
  UpdateExpression: "set Title = :title",
  ExpressionAttributeValues: {
    ":title": "what the heck!"
  }
});

const deleteCommand = new DeleteCommand({
  TableName: "td_notes_sdk",
  Key: {
    user_id: "dd",
    timestamp: 3
  }
});

const batchGetItemCommand = new BatchGetItemCommand({
  RequestItems: {
    td_notes_sdk: {
      Keys: [
        {
          user_id: {
            "S": "cc"
          }
        }
      ]
    }
  }
});

const batchWriteItemCommand = new BatchWriteItemCommand({
  RequestItems: {
    "td_notes_sdk": [
      {
        PutRequest: {
          Item: {
            user_id: "11",
            timestamp: 453,
            title: "Title 11",
            content: "Content 11"
          }
        }
      },
      {
        PutRequest: {
          Item: {
            user_id: "22",
            timestamp: 2345,
            title: "Title 22",
            content: "Content 22"
          }
        }
      }
    ]
  }
});

const response = await docClient.send(batchWriteItemCommand);
console.log(response);
