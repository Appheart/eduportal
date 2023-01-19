import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Routers
import { courseRouter, userRouter } from './api/index.js';

// Middlewares
app.use(express.json());

// Set Routes Controllers
app.use('/user', userRouter);
app.use('/course', courseRouter);

// Assign common routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// App listens to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
