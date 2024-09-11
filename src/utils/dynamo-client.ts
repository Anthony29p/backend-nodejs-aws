import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { $log } from 'ts-log-debug';

let dynamoDBClient: DynamoDBClient;

const getDynamoDBClient = (): DynamoDBClient => {
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
    return dynamoDBClient;
};

export default getDynamoDBClient;
