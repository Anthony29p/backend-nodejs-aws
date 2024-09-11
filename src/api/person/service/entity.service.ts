import { PersonSpanishResponse } from '../../../interfaces/interfaces';

export interface CreateRequest extends PersonSpanishResponse {}
export interface CreateResponse extends PersonSpanishResponse {}

export interface IPersonService {
    create(request: CreateRequest): Promise<CreateResponse>;
    find(id: number): Promise<PersonSpanishResponse>;
}
