import { s3Bucket, lambdaHandler } from '@simple-cloud/aws';

const bucketClient = s3Bucket({ name: 'hello-world-bucket' });

export const handler = lambdaHandler({ name: 'hello-world' })(
  async (event, context) => {
    const item = await bucketClient.get({ key: '1' });

    if (!item) {
      return { statusCode: 404 };
    }

    return {
      statusCode: 200,
      body: item,
    };
  }
);
