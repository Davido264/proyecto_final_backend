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
    isStudent: {
      type: 'boolean',
      required: true,
    },
    birthDate: {
      type: 'string',
      format: 'date',
      required: true,
    },
    gender: {
      type: 'string',
      pattern: /^f|m|o$/gim,
      required: false,
    },
    college: {
      type: 'string',
      required: false,
    },
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: false,
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
    isStudent: {
      type: 'boolean',
      required: false,
    },
    birthDate: {
      type: 'string',
      format: 'date',
      required: false,
    },
    gender: {
      type: 'string',
      pattern: /^f|m|o$/gim,
      required: false,
    },
    college: {
      type: 'string',
      required: false,
    },
    username: {
      type: 'string',
      required: false,
    },
    password: {
      type: 'string',
      required: false,
    },
    email: {
      type: 'string',
      required: false,
    },
  },
};

export { postSchema, putSchema };
