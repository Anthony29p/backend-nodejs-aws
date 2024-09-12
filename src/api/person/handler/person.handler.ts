import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { $log } from 'ts-log-debug';
import { HANDLER, HTTP, METHOD } from '../../../common/constants';
import { CreateRequest, IPersonService } from '../interfaces/person.interfaces';
import errorHandler from '../../../utils/response-handler';
import { createPersonValidation, idValidation } from '../validations/person.validations';

export default class PersonHandler {
    constructor(private personService: IPersonService) {}

    async create(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
        $log.info(`${HANDLER.PERSON} ${METHOD.CREATE}`);
        try {
            const body: CreateRequest | undefined = event.body ? JSON.parse(event.body) : undefined;

            await createPersonValidation.validateAsync(body);

            const createdPerson = await this.personService.create(body!);
            return {
                statusCode: HTTP.STATUS_201,
                body: JSON.stringify(createdPerson),
            };
        } catch (e) {
            $log.error(JSON.stringify(e));

            return errorHandler(e);
        }
    }

    async find(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
        $log.info(`${HANDLER.PERSON} ${METHOD.FIND}`);
        try {
            const id = event.pathParameters?.id;

            await idValidation.validateAsync(id);

            const person = await this.personService.find(id!);

            return {
                statusCode: HTTP.STATUS_200,
                body: JSON.stringify(person),
            };
        } catch (e) {
            $log.error(JSON.stringify(e));

            return errorHandler(e);
        }
    }
}
