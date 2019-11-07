
  const dev = {
    STRIPE_KEY: "pk_test_s6YYz2CdbkznNmTdJIkgzpMH002XfEYAiM",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-api-dev-attachmentsbucket-twsiaci8g67o"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://h7ejdiwvgc.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_2YWzfrXk1",
      APP_CLIENT_ID: "dctgs9dtnq2tdqvbn000pv0la",
      IDENTITY_POOL_ID: "us-east-1:ab67ebd3-e244-4677-830b-a28f6bfc10c7"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_s6YYz2CdbkznNmTdJIkgzpMH002XfEYAiM",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-api-prod-attachmentsbucket-wjot0fpegblk"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://itmehjsaze.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_jk15but6b",
      APP_CLIENT_ID: "4ruhc9pgv8voin3pc8lr7e87ce",
      IDENTITY_POOL_ID: "us-east-1:2cdd2288-b9bd-4cf8-a832-77757cafc7a7"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };