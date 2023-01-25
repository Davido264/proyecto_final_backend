import { Router } from 'express';
import teacherController from '../controllers/teacherController.js';

const adminRouter = Router();

adminRouter.post('/teachers', teacherController.post);
adminRouter.put('/teachers/:id', teacherController.put);

export default adminRouter;
