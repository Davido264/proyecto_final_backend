import { NextFunction, Request, Response } from 'express';
import validateSchema from '../services/schemaValidatorService';
import susbcriptionService from '../services/subscriptionService';

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
    const correct = validateSchema({}, req, res);

    if (!correct) {
      return;
    }
    const subscription = req.body;
    const result = await susbcriptionService.createSubscription(subscription);
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
