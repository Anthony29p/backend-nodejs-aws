import PersonService from '../../../../src/api/person/service/person.service';

describe('Person Service', async () => {
    it('should return person details when valid id is provided', async () => {
        const starWarsProvider = {
            findPersonById: jest.fn().mockResolvedValue({
                name: 'Luke Skywalker',
                height: '172',
                mass: '77',
                hair_color: 'blond',
                skin_color: 'fair',
                eye_color: 'blue',
                birth_year: '19BBY',
                gender: 'male',
                homeworld: 'Tatooine',
            }),
        };
        const service = new PersonService(starWarsProvider);
        const result = await service.find(1);
        expect(result).toEqual({
            nombre: 'Luke Skywalker',
            altura: '172',
            peso: '77',
            color_cabello: 'blond',
            color_piel: 'fair',
            color_ojos: 'blue',
            fecha_nacimiento: '19BBY',
            genero: 'male',
            planeta_natal: 'Tatooine',
        });
    });
});
