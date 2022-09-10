const app = require('../server')
const request = require('supertest') 
const {listDB, user1, user2} = require('../database/mocks')   


test('Testando post de usuários1', async () => {
    const res = await request(app).post('/users').send(user1)

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(user1)
  });

  test('Testando post de usuários1', async () => {
    const res = await request(app).post('/users').send(user2)
    expect(res.body).toEqual(user2)
  });

  test('Testando Listagem de usuários', async () => {
    const res = await request(app).get('/users')
    expect(res.body).toEqual(listDB)
  });