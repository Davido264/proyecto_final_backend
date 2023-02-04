import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization as string;
  jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
  });
  next();
}

export default authenticate;
