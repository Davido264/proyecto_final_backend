import jwt from 'jsonwebtoken';

type AuthGenDTO = { id: string; email: string };

export function createToken(user: AuthGenDTO) {
  const payload = {
    id: user.id,
    email: user.email,
  };

  // Firma el token con una clave secreta
  const options = {
    expiresIn: '15d',
  };

  return jwt.sign(payload, process.env.SECRET_KEY as string, options);
}

export { AuthGenDTO };
