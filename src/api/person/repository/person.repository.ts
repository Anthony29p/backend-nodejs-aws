import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { $log } from 'ts-log-debug';
import { CreateRequest, CreateResponse, IPersonRepository } from '../interfaces/person.interfaces';
import { METHOD, REPOSITORY } from '../../../common/constants';

export default class PersonRepository implements IPersonRepository {
    constructor(private database: DynamoDBDocumentClient) {}

    public async create(request: CreateRequest): Promise<CreateResponse> {
        $log.info(`${REPOSITORY.PERSON} ${METHOD.CREATE}`);

        const params = {
            id: uuidv4(),
            name: request.nombre,
            height: request.altura,
            mass: request.peso,
            hair_color: request.color_cabello,
            skin_color: request.color_piel,
            eye_color: request.color_ojos,
            birth_year: request.fecha_nacimiento,
            gender: request.genero,
            homeworld: request.planeta_natal,
        };
        const createdPerson = await this.database.send(
            new PutCommand({
                TableName: process.env.DATABASE_NAME,
                Item: params,
            }),
        );
        $log.debug(`${REPOSITORY.PERSON} ${METHOD.CREATE}`, JSON.stringify(createdPerson));

        return params;
    }

    public async find(id: string): Promise<CreateResponse | null> {
        $log.info(`${REPOSITORY.PERSON} ${METHOD.FIND}`);

        const body = await this.database.send(
            new GetCommand({
                TableName: process.env.DATABASE_NAME,
                Key: {
                    id,
                },
            }),
        );

        if (!body) {
            return null;
        }

        return body.Item as any as CreateResponse;
    }
}
