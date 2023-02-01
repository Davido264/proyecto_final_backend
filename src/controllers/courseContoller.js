import { postSchema } from '../schemas/courseSchema.js';
import service from '../services/coursesService.js';
import { completeFilePath } from '../services/fileService.js';
import validateSchema from '../services/schemaValidatorService.js';

async function get(req, res, next) {
  try {
    const coursesFromDb = await service.getCourses();
    const courses = coursesFromDb.map(e => completeFilePath(e, 'dumbnail'));
    res.json(courses);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const courseFromDb = await service.getCourse(id);
    const course = completeFilePath(courseFromDb, 'dumbnail');
    res.json(course);
  } catch (error) {
    next(error);
  }
}

async function post(req, res, next) {
  try {
    const correct = validateSchema(postSchema, req, res);

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
    const result = await service.modifyCourse(id, course);
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
