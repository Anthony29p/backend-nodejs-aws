import axios, { AxiosError } from 'axios';
import { $log } from 'ts-log-debug';
import { Person } from './star-wars.interface';
import { METHOD, PROVIDER } from '../../common/constants';

export default class StarWarsProvider {
    async findPersonById(id: number): Promise<Person | null> {
        $log.info(`${PROVIDER.STAR_WARS} ${METHOD.FIND}`);
        try {
            const personResponse = await axios.get(`https://swapi.py4e.com/api/people/${id}`);

            $log.debug(personResponse.data);

            return personResponse.data;
        } catch (e) {
            if (e instanceof AxiosError) {
                $log.error(e.message);
            }
            return null;
        }
    }
}
