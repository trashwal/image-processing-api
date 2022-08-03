import express, { Request, Response } from 'express';
import processor from './api/processor';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send('Root');
});

routes.use('/processor', processor);

export default routes;
