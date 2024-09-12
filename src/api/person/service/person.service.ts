import { $log } from 'ts-log-debug';
import { METHOD, numberRegex, SERVICE } from '../../../common/constants';
import { PersonSpanishResponse } from '../../../interfaces/interfaces';
import StarWarsProvider from '../../../provider/star-wars/star-wars.provider';
import { CreateRequest, CreateResponse, IPersonService } from '../interfaces/person.interfaces';
import PersonRepository from '../repository/person.repository';
import { NotFoundException } from '../../../common/errors';
import { Person } from '../../../provider/star-wars/star-wars.interface';

export default class PersonService implements IPersonService {
    constructor(private personRepository: PersonRepository, private starWarsProvider: StarWarsProvider) {}
    public async create(request: CreateRequest): Promise<CreateResponse> {
        $log.info(`${SERVICE.PERSON} ${METHOD.CREATE}`);

        const createdPerson = await this.personRepository.create(request);

        return createdPerson;
    }

    public async find(id: string): Promise<PersonSpanishResponse> {
        $log.info(`${SERVICE.PERSON} ${METHOD.FIND}`);

        let person: CreateResponse | Person | null = null;

        if (numberRegex.test(id)) {
            person = await this.starWarsProvider.findPersonById(+id);
        } else {
            person = await this.personRepository.find(id);
        }

        if (!person) {
            throw new NotFoundException();
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
