import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import errorHandler from './midleware/errorHandler.js';
import adminRouter from './routes/adminRouter.js';
import authRouter from './routes/authRouter.js';
import courseRouter from './routes/courseRouter.js';
import profileRouter from './routes/profileRouter.js';
import subscriptionRouter from './routes/subscriptionRouter.js';
import teacherRouter from './routes/teachersRouter.js';

const app = express();

dotenv.config();
const port = process.env.PORT || 9090;

app.use(cors());
app.use(bodyParser.json());

// logging access to every route
app.use((req, _, next) => {
  console.log(`Attempt to call ${req.method} on url: ${req.path}`);
  next();
});

app.get('/', (_, res, next) => {
  res.json('ok');
  next();
});

// routers
app.use('/teachers', teacherRouter);
app.use('/admin', adminRouter);
app.use('/profiles', profileRouter);
app.use('/courses', courseRouter);
app.use('/auth', authRouter);
app.use('/subscriptions', subscriptionRouter);

app.use(errorHandler);
app.listen(port, () => console.log(`listening on ${port}`));
