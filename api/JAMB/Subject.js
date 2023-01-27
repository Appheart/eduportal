import { Router } from 'express';
import { SubjectModel } from '../../models/index.js';

const SubjectRouter = Router();

// Get all
SubjectRouter.get('/', async (req, res) => {
  const Subjects = await SubjectModel.find();

  res.send(Subjects);
});

// Create One
SubjectRouter.post('/', async (req, res) => {
  const Subject = req.body.subject;
});

export default SubjectRouter;
