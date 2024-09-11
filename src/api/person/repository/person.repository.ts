import { PersonSpanishResponse } from '../../../interfaces/interfaces';
import { CreateRequest, CreateResponse } from '../interfaces/person.interfaces';

export interface IPersonRepository {
    create(request: CreateRequest): Promise<CreateResponse>;
    find(id: number): Promise<PersonSpanishResponse>;
}
