import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Endpoint tests', () => {
  describe('Test proper parameters response', () => {
    it('gets the processor endpoint with proper parameters', async () => {
      const response = await request.get(
        '/processor?filename=santamonica&width=300&height=100'
      );
      expect(response.status).toBe(200);
    });
  });

  describe('Test wrong parameters response', () => {
    it('sends 400 code when filename parameter is missing', async () => {
      const response = await request.get('/processor?file=fjord');
      expect(response.status).toBe(400);
    });
    it('sends 404 code when wrong filename parameter is entered', async () => {
      const response = await request.get('/processor?filename=a');
      expect(response.status).toBe(404);
    });
    it('sends 400 code when invalid size parameters are entered', async () => {
      const response = await request.get('/processor?filename=fjord&width=-10');
      expect(response.status).toBe(400);
    });
  });
});
