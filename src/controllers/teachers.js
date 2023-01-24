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
    const teacher = await service.getTeachers({ $id: id });
    res.json(teacher);
  } catch (error) {
    next(error);
  }
}

async function post(req, res, next) {
  try {
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
    const result = await service.modifyTeacher({ $id: id }, teacher);
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
