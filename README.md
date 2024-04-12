# serverless-course

Code pertaining to the AWS Lambda &amp; Serverless Architecture Bootcamp course on Udemy

# To Setup The AWS CLI

- Follow these instructions to install the AWS CLI v2: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- Enable IAM Identity Center, create user, create permission set, and assign permission to new user account, follow this video: https://www.youtube.com/watch?v=_KhrGFV_Npw
- Login with IAM Identity Center Access Portal URL using newly created user (enable MFA)
- Click Access Keys and [follow these instructions]([https://](https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html#sso-configure-profile-token-auto-sso)) to setup the AWS CLI to use AWS IAM Identity Center credentials. 
- Run `aws sso login` to refresh your token

# To Deploy code to AWS Lambda via AWS CLI

- 
