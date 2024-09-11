import { PersonSpanishResponse } from '../../../interfaces/interfaces';

export interface IPersonService {
    create(request: CreateRequest): Promise<CreateResponse>;
    find(id: number): Promise<PersonSpanishResponse>;
}

export interface CreateRequest extends PersonSpanishResponse {}
export interface CreateResponse extends PersonSpanishResponse {}
