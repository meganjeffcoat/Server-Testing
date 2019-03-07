const request = require('supertest');
const server = require('./server.js');

describe('POST/', () => {
    it('should add new user to db', async () => {
        const hero = {name: 'Superman', type_of_hero: 'alien'};

        let res = await request(server)
            .post('/heros')
            .send(hero);
        expect(res.hero).toEqual([4]);
    });

    it('should return 400 if name or type_of_hero is missing', async () => {
        let res = await request(server)
            .post('/heros')
            .send({ name: 'Batman' });
        
        expect(res.status).toBe(400);

        res = await request(server)
            .post('/heros')
            .send({ type_of_hero: 'rich man with toys' });
        
        expect(res.status).toBe(400);
    });
});