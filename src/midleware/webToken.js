import jwt from 'jsonwebtoken';

export default function authenticate(req, res, next) {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
  });
  next();
}
