import { Request, Response } from 'express';
import { validate } from 'jsonschema';

function validateSchema(schema: any, req: Request, res: Response): boolean {
  if (req.get('Content-Type') != 'application/json') {
    res.status(400).json({ message: 'bad application type' });
    return false;
  }

  const result = validate(req.body, schema);

  if (!result.valid) {
    res.status(400).json(
      result.errors.map(error => {
        return { message: error.stack };
      })
    );
    return false;
  }
  return true;
}

export default validateSchema;
