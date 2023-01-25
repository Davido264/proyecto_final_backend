import { Router } from 'express';
import profileController from '../controllers/profileController.js';

const profileRouter = Router();

profileRouter.get('/:id', profileController.getById);
profileRouter.post('/', profileController.post);
profileRouter.put('/:id', profileController.put);

export default profileRouter;
