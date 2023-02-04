import { NextFunction, Request, Response } from 'express';
import { postSchema } from '../schemas/teacherSchema.js';
import validateSchema from '../services/schemaValidatorService.js';
import teacherService from '../services/teachersService.js';

async function get(_: Request, res: Response, next: NextFunction) {
  try {
    const teachers = await teacherService.getTeachers();
    res.json(teachers);
  } catch (error) {
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const teacher = await teacherService.getTeacher(id);
    res.json(teacher);
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

    const teacher = req.body;
    const result = await teacherService.addTeacher(teacher);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function put(req: Request, res: Response, next: NextFunction) {
  try {
    const teacher = req.body;
    const id = req.params.id;
    const result = await teacherService.modifyTeacher(id, teacher);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export default {
  get,
  getById,
  post,
  put,
};
