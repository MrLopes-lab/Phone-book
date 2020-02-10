import { Router } from 'express';

import UserControler from './app/controller/UserController';

const routes = new Router();

routes.post('/users', UserControler.store);

export default routes;
