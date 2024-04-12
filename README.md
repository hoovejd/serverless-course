# serverless-course

Code pertaining to the AWS Lambda &amp; Serverless Architecture Bootcamp course on Udemy

# To Setup The AWS CLI

- Follow these instructions to install the AWS CLI v2: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- Enable IAM Identity Center, create user, create permission set (use PowerUserAccess), and assign permission to new user account, follow this video: https://www.youtube.com/watch?v=_KhrGFV_Npw
- Modify the PowerUserAccess permission set, attach the IAMFullAccess policy to allow role and policy creation
- Login with IAM Identity Center Access Portal URL using newly created user (enable MFA)
- Click Access Keys and [follow these instructions]([https://](https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html#sso-configure-profile-token-auto-sso)) to setup the AWS CLI to use AWS IAM Identity Center credentials. 
- Run `aws sso login` to refresh your token

## Troubleshooting
If your linux system time is off, this will break AWS credentials.
- check time with: `date`
- if date is wrong, install ntpdate: `sudo apt install ntpdate`
- synch date: `sudo ntpdate time.nist.gov`

# To Deploy code to AWS Lambda via AWS CLI
- zip all necessary files (index.js, package.json, package-lock.json, node_modules): `zip index.js`
- upload zip to S3: `aws s3 cp s3_event.zip s3://serverless-course-bucket`
- update the AWS lambda function with the new zip in S3: `aws lambda update-function-code --function-name handleS3PutEvent --s3-bucket serverless-course-bucket --s3-key s3_event.zip --publish`

