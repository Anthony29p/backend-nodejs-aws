import { PersonSpanishResponse } from '../../../interfaces/interfaces';

export interface IPersonService {
    create(request: CreateRequest): Promise<CreateResponse>;
    find(id: string): Promise<PersonSpanishResponse>;
}

export interface IPersonRepository {
    create(request: CreateRequest): Promise<CreateResponse>;
    find(id: string): Promise<CreateResponse | null>;
}

export interface CreateRequest extends PersonSpanishResponse {}
export interface CreateResponse {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
}
