import { NextFunction, Request, Response } from 'express';

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res
    .status(statusCode)
    .json({ message: `Internal server error. ${err.message}` });
  return;
};
