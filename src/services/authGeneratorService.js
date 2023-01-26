import jwt from 'jsonwebtoken';

export default user => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  // Firma el token con una clave secreta
  const options = {
    expiresIn: '15d',
  };

  return jwt.sign(payload, process.env.SECRET_KEY, options);
};
