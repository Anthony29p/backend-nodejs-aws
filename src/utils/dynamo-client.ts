import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { $log } from 'ts-log-debug';

let dynamoDBClient: DynamoDBClient;

const getDynamoDBDocumentClient = (): DynamoDBDocumentClient => {
    if (dynamoDBClient) {
        $log.debug('Existant dynamo db client');
        return dynamoDBClient;
    }
    if (process.env.ACCESS_KEY_ID && process.env.SECRET_ACCESS_KEY) {
        dynamoDBClient = new DynamoDBClient({
            credentials: {
                accessKeyId: process.env.ACCESS_KEY_ID,
                secretAccessKey: process.env.SECRET_ACCESS_KEY,
            },
            region: process.env.REGION,
        });
        $log.debug('New dynamo db client through credentials');
    } else {
        dynamoDBClient = new DynamoDBClient();
        $log.debug('New dynamo db client');
    }

    const docClient = DynamoDBDocumentClient.from(dynamoDBClient);
    return docClient;
};

export default getDynamoDBDocumentClient;
