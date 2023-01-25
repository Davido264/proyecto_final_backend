import jwt from 'jsonwebtoken';

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
  });
  next();
}

export default authenticate;
