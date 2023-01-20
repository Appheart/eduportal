import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

import connectDB from './config/db.js';

import { courseRouter, newsRouter, userRouter } from './api/index.js';

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());

// Set Routes Controllers
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/news', newsRouter);
app.use(bodyParser.json());

// Assign common routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// DB
connectDB();

// App listens to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
