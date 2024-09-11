import { APIGatewayEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import PersonHandler from './api/person/handler';
import { HTTP_METHOD } from './common/constants';
import PersonService from './api/person/service/entity.service.impl';
import StarWarsProvider from './provider/star-wars/star-wars.provider';

const starWarsProvider = new StarWarsProvider();
const personService = new PersonService(starWarsProvider);
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
