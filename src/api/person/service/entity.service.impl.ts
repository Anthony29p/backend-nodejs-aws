import { $log } from 'ts-log-debug';
import { CreateRequest, CreateResponse, IPersonService } from './entity.service';
import { METHOD, SERVICE } from '../../../common/constants';
import { PersonSpanishResponse } from '../../../interfaces/interfaces';
import StarWarsProvider from '../../../provider/star-wars/star-wars.provider';

export default class PersonService implements IPersonService {
    constructor(private starWarsProvider: StarWarsProvider) {}
    public async create(request: CreateRequest): Promise<CreateResponse> {
        $log.info(`${SERVICE.PERSON} ${METHOD.CREATE}`);
        return request;
    }

    public async find(id: number): Promise<PersonSpanishResponse> {
        $log.info(`${SERVICE.PERSON} ${METHOD.FIND}`);

        const person = await this.starWarsProvider.findPersonById(id);

        if (!person) {
            throw new Error('Not found');
        }

        const {
            name,
            height,
            mass,
            hair_color: hairColor,
            skin_color: skinColor,
            eye_color: eyeColor,
            birth_year: birthYear,
            gender,
            homeworld,
        } = person;

        return {
            nombre: name,
            altura: height,
            peso: mass,
            color_cabello: hairColor,
            color_piel: skinColor,
            color_ojos: eyeColor,
            fecha_nacimiento: birthYear,
            genero: gender,
            planeta_natal: homeworld,
        };
    }
}
