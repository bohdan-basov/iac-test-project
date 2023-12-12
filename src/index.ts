import { lambdaFunction, s3Bucket } from '@simple-cloud/aws';

const lambda = lambdaFunction({ name: 'hello-world' });
const bucket = s3Bucket({ name: 'hello-world-bucket' });

bucket.grantRead(lambda);

setupLogging();

export const handler = lambda.handler(async (event) => {
  const statusCode = 200;

  return { statusCode };
});

function setupLogging() {
  console.log('Logging set up');
}
