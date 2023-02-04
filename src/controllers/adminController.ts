import { NextFunction, Request, Response } from 'express';
import adminService from '../services/adminService.js';

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const admins = await adminService.getAdmins();
    res.json(admins);
  } catch (error) {
    next(error);
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const admin = await adminService.getAdmin(id);
    res.json(admin);
  } catch (error) {
    next(error);
  }
}

export default {
  get,
  getById,
};
