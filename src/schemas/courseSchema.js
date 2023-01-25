const postSchema = {
  $id: '',
  type: 'object',
  properties: {
    crateDate: {
      type: 'string',
      format: 'date',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    dubnail: {
      type: 'string',
      required: true,
    },
    open: {
      type: 'boolean',
      required: true,
    },
    teacherId: {
      type: 'string',
      required: true,
    },
    availability: {
      type: 'integer',
      required: true,
    },
  },
};

const putSchema = {
  $id: '',
  type: 'object',
  properties: {
    crateDate: {
      type: 'string',
      format: 'date',
      required: false,
    },
    title: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    dubnail: {
      type: 'string',
      required: false,
    },
    open: {
      type: 'boolean',
      required: false,
    },
    teacherId: {
      type: 'string',
      required: false,
    },
    availability: {
      type: 'integer',
      required: false,
    },
  },
};

export { postSchema, putSchema };
