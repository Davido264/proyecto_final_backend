export default {
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
    genre: {
      type: 'string',
      pattern: /^f|m|o$/gim,
      required: false,
    },
    birthDate: {
      type: 'date',
      required: true,
    },
  },
};
