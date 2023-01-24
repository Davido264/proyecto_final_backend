import { Router } from 'express';
import teacherController from '../controllers/teachers.js';

const teacherRouter = Router();

//router.use(authenticate);
teacherRouter.get('/', teacherController.get);
teacherRouter.get('/:id', teacherController.getById);

export default teacherRouter;
