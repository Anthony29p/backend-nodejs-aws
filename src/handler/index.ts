import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { $log } from 'ts-log-debug';
import { HANDLER, HTTP, METHOD } from '../common/constants';
import { IPersonService } from '../service/entity.service';

export default class PersonHandler {
    constructor(private personService: IPersonService) {}

    async create(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
        $log.info(`${HANDLER.PERSON} ${METHOD.CREATE}`);
        try {
            $log.debug('event');

            const body = JSON.parse(event.body!);

            await this.personService.create(body);
            return {
                statusCode: HTTP.STATUS_200,
                body: JSON.stringify({
                    message: 'hello world',
                }),
            };
        } catch (e) {
            $log.error('gato');
            return {
                statusCode: HTTP.STATUS_500,
                body: JSON.stringify({
                    message: 'some error happened',
                }),
            };
        }
    }

    async find(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
        $log.info(`${HANDLER.PERSON} ${METHOD.FIND}`);
        try {
            $log.debug('event');

            const id = event.pathParameters!.id;

            const person = await this.personService.find(+id!);

            return {
                statusCode: HTTP.STATUS_200,
                body: JSON.stringify(person),
            };
        } catch (e) {
            $log.error('gato');
            return {
                statusCode: HTTP.STATUS_500,
                body: JSON.stringify({
                    message: 'some error happened',
                }),
            };
        }
    }
}
