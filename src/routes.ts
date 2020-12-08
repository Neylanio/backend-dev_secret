import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  const algo = {
    name: 'Neylanio',
    idade: 24,
  }
  return response.json(algo)
});

export default routes;