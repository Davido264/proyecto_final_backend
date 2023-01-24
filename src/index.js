import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import errorHandler from './midleware/errorHandler.js';
import beforeMethod from './midleware/logger.js';
import teacherRouter from './routes/teachersRoute.js';

const app = express();

dotenv.config();
const port = process.env.PORT || 9090;

app.use(bodyParser.json());
app.use(beforeMethod);

app.get('/', (req, res, next) => {
  res.json('ok');
  next();
});

// routers
app.use('/teachers', teacherRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`listening on ${port}`));
