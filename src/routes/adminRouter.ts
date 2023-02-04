import { Router } from 'express';
import adminController from '../controllers/adminController.js';
import courseController from '../controllers/courseContoller.js';
import profileController from '../controllers/profileController.js';
import teacherController from '../controllers/teacherController.js';

const adminRouter = Router();

adminRouter.post('/teachers', teacherController.post);
adminRouter.put('/teachers/:id', teacherController.put);
adminRouter.get('/profiles', profileController.get);
adminRouter.post('/courses', courseController.post);
adminRouter.get('/courses/:id/subscribers', courseController.getSubscribers);
adminRouter.put('/courses/:id', courseController.put);
adminRouter.get('/registered-admins', adminController.get);
adminRouter.get('/registered-admins/:id', adminController.getById);

export default adminRouter;
