import { Router } from 'express';
import courseController from '../controllers/courseContoller.js';
import profileController from '../controllers/profileController.js';
import teacherController from '../controllers/teacherController.js';

const adminRouter = Router();

adminRouter.post('/teachers', teacherController.post);
adminRouter.put('/teachers/:id', teacherController.put);
adminRouter.get('/profiles', profileController.get);
adminRouter.post('/courses', courseController.post);
adminRouter.put('/courses/:id', courseController.put);

export default adminRouter;
