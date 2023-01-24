import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => console.log(`listening on ${port}`));
