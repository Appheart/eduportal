import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

import connectDB from './config/db.js';

import {
  courseRouter,
  JambRouter,
  newsRouter,
  userRouter,
} from './api/index.js';
import ftpRouter from './api/FTP/index.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Set Routes Controllers
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use('/news', newsRouter);
app.use('/jamb', JambRouter);
app.use('/upload', ftpRouter);
app.use(bodyParser.json());

// Assign common routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// DB
connectDB();

// App listens to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
