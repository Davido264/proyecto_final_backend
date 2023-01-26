import { Router } from 'express';
import profileController from '../controllers/profileController.js';

const authRouter = Router();

authRouter.post('/', profileController.authenticate);

export default authRouter;
