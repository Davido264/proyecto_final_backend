import { Router } from 'express';
import courseContoller from '../controllers/courseContoller';

const courseRouter = Router();

courseContoller.get('/', courseContoller.get);
courseContoller.get('/', courseContoller.getById);

export default courseRouter;
