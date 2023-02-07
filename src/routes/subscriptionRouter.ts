import { Router } from 'express';
import subscriptionController from '../controllers/subscriptionController.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/:id', subscriptionController.getById);
subscriptionRouter.put('/:id', subscriptionController.put);
subscriptionRouter.delete('/:id', subscriptionController.deletes);

export default subscriptionRouter;
