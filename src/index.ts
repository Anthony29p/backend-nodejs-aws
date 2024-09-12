import { APIGatewayEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import { HTTP, HTTP_METHOD } from './common/constants';
import PersonService from './api/person/service/person.service';
import StarWarsProvider from './provider/star-wars/star-wars.provider';
import PersonHandler from './api/person/handler/person.handler';
import PersonRepository from './api/person/repository/person.repository';
import getDynamoDBDocumentClient from './utils/dynamo-client';

const dynamoDBDocumentClient = getDynamoDBDocumentClient();

const starWarsProvider = new StarWarsProvider();
const personRepository = new PersonRepository(dynamoDBDocumentClient);
const personService = new PersonService(personRepository, starWarsProvider);
const personHandler = new PersonHandler(personService);

export const createHandler: Handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== HTTP_METHOD.POST) {
        throw new Error(`createHandler only accept POST method, you tried: ${event.httpMethod}`);
    }

    return await personHandler.create(event);
};

export const findHandler: Handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== HTTP_METHOD.GET) {
        throw new Error(`findHandler only accept GET method, you tried: ${event.httpMethod}`);
    }

    return await personHandler.find(event);
};

export const routeNotFoundHandler: Handler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: HTTP.STATUS_404,
        body: JSON.stringify({
            message: 'Route Not Found',
            path: event.path,
        }),
    };
};
