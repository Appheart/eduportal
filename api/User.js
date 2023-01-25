import { Router } from 'express';
import { UserModel } from '../models/index.js';

const userRouter = Router();

// Signup
userRouter.post('/create', async (req, res) => {
  const data = new UserModel({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const saveUser = await data.save();
    res.status(200).json(saveUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Signin
userRouter.post('/login', (req, res) => {});

// User
userRouter.get('/', (req, res) => {
  res.send('Users');
});

export default userRouter;
