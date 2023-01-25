import { ServerCapabilities } from 'mongodb';
import { postSchema } from '../schemas/courseSchema.js';
import service from '../services/coursesService.js';
import validateSchema from '../services/schemaValidator.js';

async function get(_, res, next) {
  try {
    const course = await service.getCourses();
    res.json(course);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const course = await service.getCourse({ $id: id });
    res.json(course);
  } catch (error) {
    next(error);
  }
}

async function post(req, res, next) {
  try {
    const correct = validateSchema(postSchema, postSchema, req, res);

    if (!correct) {
      return;
    }
    const course = req.body;
    const result = await service.addCourse(course);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function put(req, res, next) {
  try {
    const course = req.body;
    const id = req.param.id;
    const result = await service.modifyCourse({ $id: id }, course);
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
