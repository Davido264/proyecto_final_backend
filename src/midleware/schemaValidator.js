import { validate } from 'jsonschema';

function createValidation(schema) {
  return (req, res, next) => {
    if (req.get('Content-Type') != 'application/json') {
      res.status(400).json({ message: 'bad application type' });
      return;
    }

    const result = validate(req.body, schema);

    if (!result.valid) {
      res.status(400).json(
        result.errors.map(error => {
          return { message: error.stack };
        })
      );
    }
  };
}

export default createValidation;
