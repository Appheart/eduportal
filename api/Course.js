import { Router } from 'express';
import axios from 'axios';

const courses = await axios.get(
  'https://jsonplaceholder.typicode.com/todos?_limit=5'
);

const courseRouter = Router();

// Signup
courseRouter.post('/signup', (req, res) => {});

// Signin
courseRouter.post('/signin', (req, res) => {});

// course
courseRouter.get('/', (req, res) => {
  res.send(courses.data);
});

export { courseRouter };
