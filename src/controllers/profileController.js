import { postSchema, putSchema } from '../schemas/profileSchema';
import profilesService from '../services/profilesService.js';
import validateSchema from '../services/schemaValidator';

async function get(req, res, next) {
  try {
    const profiles = await profilesService.getProfiles();
    res.json(profiles);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const id = req.params.id;
    const profiles = await profilesService.getProfiles({ _id: id });
    res.json(profiles);
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

    const profile = req.body;
    const result = await profilesService.addProfile(profile);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function put(req, res, next) {
  try {
    const correct = validateSchema(putSchema, req, res);
    if (!correct) {
      return;
    }

    const profile = req.body;
    const id = req.params.id;
    const result = await profilesService.updateProfile(id, profile);
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
