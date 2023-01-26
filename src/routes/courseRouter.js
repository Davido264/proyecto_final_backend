import { Router } from 'express';
import courseContoller from '../controllers/courseContoller.js';

const courseRouter = Router();

courseRouter.get('/', courseContoller.get);
courseRouter.get('/:id', courseContoller.getById);

export default courseRouter;
