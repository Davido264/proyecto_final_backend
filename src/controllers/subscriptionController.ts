import { NextFunction, Request, Response } from 'express';
import validateSchema from '../services/schemaValidatorService.js';
import susbcriptionService from '../services/subscriptionService.js';
import coursesService from '../services/coursesService.js';

async function getByUser(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.userId;
    const subscriptions = await susbcriptionService.getSubscriptions({
      userId: id,
    });
    res.json(subscriptions);
  } catch (error) {
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const subscription = await susbcriptionService.getSubscription(id);
    res.json(subscription);
  } catch (error) {
    next(error);
  }
}

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const subscriptions = await susbcriptionService.getSubscriptions();
    res.json(subscriptions);
  } catch (error) {
    next(error);
  }
}

async function post(req: Request, res: Response, next: NextFunction) {
  try {
    const subscription = req.body;
    const courseId = req.body.courseId;
    const course = await coursesService.getCourse(courseId);

    if (course === null) {
      res.status(400).json({ message: 'Course id not found' });
      return;
    }

    course.availability =
      course.availability === 0 ? 0 : course.availability - 1;

    const result = [{}, {}];

    result[0] = await susbcriptionService.createSubscription(subscription);
    result[1] = await coursesService.modifyCourse(courseId, course);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function put(req: Request, res: Response, next: NextFunction) {
  try {
    const correct = validateSchema({}, req, res);

    if (!correct) {
      return;
    }
    const subscription = req.body;
    const id = req.params.id;
    const result = await susbcriptionService.modifySubscription(
      id,
      subscription
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function deletes(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const result = await susbcriptionService.deleteSubscription(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export default {
  get,
  getById,
  getByUser,
  post,
  put,
  deletes,
};
