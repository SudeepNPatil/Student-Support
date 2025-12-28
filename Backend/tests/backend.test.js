import request from 'supertest';
import app from '../app.js';

describe('Server Health Check', () => {
  it('should return server alive message', async () => {
    const res = await request(app).get('/ping');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Server is alive!');
  });

  Test('GET Routes of users', async () => {
    const res = await request(app).get('/user');
  });
});
