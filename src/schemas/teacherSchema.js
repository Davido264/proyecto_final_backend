const postSchema = {
  $id: '',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    gender: {
      type: 'string',
      pattern: /^f|m|o$/gim,
      required: false,
    },
    birthDate: {
      type: 'string',
      format: 'date',
      required: true,
    },
  },
};

const putSchema = {
  $id: '',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      required: false,
    },
    lastName: {
      type: 'string',
      required: false,
    },
    gender: {
      type: 'string',
      pattern: /^f|m|o$/gim,
      required: false,
    },
    birthDate: {
      type: 'string',
      format: 'date',
      required: false,
    },
  },
};

export { postSchema, putSchema };
