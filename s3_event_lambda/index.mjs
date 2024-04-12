// To make this work, configure the S3 bucket to notify this lambda function when an object is PUT in the S3 bucket
// Deploy this lambda function
// Upload a file to the S3 bucket
// View the CloudWatch logs to see the console output

export const handler = async (event) => {

  // An S3 put event can contain multiple records
  let filesProcessed = event.Records.map(async (record) => {

    // See the S3 Put Test Template in lambda to see what fields are passed to event on an S3 Put event
    let bucket = record.s3.bucket.name;
    let filename = record.s3.object.key;

    console.log(`File ${filename} has been put in S3 bucket ${bucket}!`);
    console.info('You are awesome!');
  });
  return "done";
};
