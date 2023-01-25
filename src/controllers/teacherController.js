import { postSchema } from '../schemas/teacherSchema.js';
import validateSchema from '../services/schemaValidator.js';
import service from '../services/teachersService.js';

async function get(_, res, next) {
  try {
    const teachers = await service.getTeachers();
    res.json(teachers);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const teacher = await service.getTeacher(id);
    res.json(teacher);
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

    const teacher = req.body;
    const result = await service.addTeacher(teacher);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function put(req, res, next) {
  try {
    const teacher = req.body;
    const id = req.params.id;
    const result = await service.modifyTeacher({ _id: id }, teacher);
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
