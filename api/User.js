import { Router } from 'express';

const userRouter = Router();

// Signup
userRouter.post('/signup', (req, res) => {});

// Signin
userRouter.post('/signin', (req, res) => {});

// User
userRouter.get('/', (req, res) => {
  res.send('Users');
});

export default userRouter;
