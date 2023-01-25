import { Router } from 'express';
import profileController from '../controllers/profileController.js';
import teacherController from '../controllers/teacherController.js';

const adminRouter = Router();

adminRouter.post('/teachers', teacherController.post);
adminRouter.put('/teachers/:id', teacherController.put);
adminRouter.get('/profiles', profileController.get);

export default adminRouter;
