import AWS from "aws-sdk";

export const handler = async (event, context) => {
  // An S3 put event can contain multiple records
  let filesProcessed = event.Records.map(async (record) => {
    // See the S3 Put Test Template in lambda to see what fields are passed to event on an S3 Put event
    let bucket = record.s3.bucket.name;
    let filename = record.s3.object.key;

    console.log(`File ${filename} has been put in S3 bucket ${bucket}!`);
  });
  return "done";
};
