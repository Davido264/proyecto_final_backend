import { Router } from 'express';
import profileController from '../controllers/profileController.js';
import subscriptionController from '../controllers/subscriptionController.js';

const profileRouter = Router();

profileRouter.get('/:id', profileController.getById);
profileRouter.post('/profile', profileController.post);
profileRouter.post('/auth', profileController.authenticate);
profileRouter.put('/:id', profileController.put);
profileRouter.delete('/:id', profileController.deletep);

profileRouter.get('/:userId/subscriptions', subscriptionController.getByUser);
profileRouter.post('/:userId/subscriptions', subscriptionController.post);

export default profileRouter;
