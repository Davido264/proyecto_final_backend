import { NextFunction, Request, Response } from 'express';
import { postSchema } from '../schemas/courseSchema.js';
import coursesService from '../services/coursesService.js';
import { completeFilePath } from '../services/fileService.js';
import profilesService from '../services/profilesService.js';
import validateSchema from '../services/schemaValidatorService.js';
import subscriptionService from '../services/subscriptionService.js';

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const coursesFromDb = await coursesService.getCourses();
    const courses = coursesFromDb.map(e => completeFilePath(e, 'dumbnail'));
    res.json(courses);
  } catch (error) {
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const courseFromDb = await coursesService.getCourse(id);
    const course = completeFilePath(courseFromDb, 'dumbnail');
    res.json(course);
  } catch (error) {
    next(error);
  }
}

async function post(req: Request, res: Response, next: NextFunction) {
  try {
    const correct = validateSchema(postSchema, req, res);

    if (!correct) {
      return;
    }
    const course = req.body;
    const result = await coursesService.addCourse(course);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function put(req: Request, res: Response, next: NextFunction) {
  try {
    const course = req.body;
    const id = req.params.id;
    const result = await coursesService.modifyCourse(id, course);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function getSubscribers(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const subscriptions = await subscriptionService.getSubscriptions({
      courseId: id,
    });

    const subscribers = subscriptions.map(async e => {
      return await profilesService.getProfiles({
        subscriptions: { $elemMatch: e._id.toString() },
      });
    });
    res.json(subscribers);
  } catch (error) {
    next(error);
  }
}

export default {
  get,
  getById,
  post,
  put,
  getSubscribers,
};
