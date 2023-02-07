import { NextFunction, Request, Response } from 'express';
import authSchema from '../schemas/authSchema.js';
import { postSchema, putSchema } from '../schemas/profileSchema.js';
import { createToken } from '../services/authGeneratorService.js';
import profilesService from '../services/profilesService.js';
import validateSchema from '../services/schemaValidatorService.js';

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const profiles = await profilesService.getProfiles();

    profiles.forEach(e => delete e.password);

    res.json(profiles);
  } catch (error) {
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const profile = await profilesService.getProfile(id);

    delete profile?.password;

    res.json(profile);
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

    const profile = req.body;

    if (req.body.isStudent && !req.body.college) {
      res
        .status(400)
        .json({ message: 'college field is mandatory if isStudent is true' });
      return;
    }

    const result = await profilesService.addProfile(profile);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function put(req: Request, res: Response, next: NextFunction) {
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

async function deletep(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const result = await profilesService.deleteProfile(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const correct = validateSchema(authSchema, req, res);
    if (!correct) {
      return;
    }

    const auth = req.body;
    const profiles = await profilesService.getProfiles({
      username: auth.username,
    });

    if (profiles.length === 0) {
      res.status(400).json({ message: `No user ${auth.username} was found` });
      return;
    }

    const profile = profiles[0];

    if (profile.password !== auth.password) {
      res.status(400).json({ message: `Invalid password` });
      return;
    }

    const token = createToken({
      email: profile.email,
      id: profile._id.toString(),
    });

    res.json({ token: token, userId: profile._id.toString() });
  } catch (error) {
    next(error);
  }
}

export default {
  get,
  getById,
  post,
  put,
  deletep,
  authenticate,
};
