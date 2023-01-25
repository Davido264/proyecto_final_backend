import { Router } from 'express';
import teacherController from '../controllers/teacherController.js';

const teacherRouter = Router();

//router.use(authenticate);
teacherRouter.get('/', teacherController.get);
teacherRouter.get('/:id', teacherController.getById);

export default teacherRouter;
