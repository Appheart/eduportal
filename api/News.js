import { Router } from 'express';
import { NewsModel } from '../models/index.js';

const newsRouter = Router();

// Create One
newsRouter.post('/', async (req, res) => {
  const data = new NewsModel({
    title: req.body.title,
    link: req.body.link,
    source: req.body.source,
    illustration: req.body.illustration,
    tags: req.body.tags,
    publishedOn: req.body.publishedOn,
  });

  try {
    const saveNewNews = await data.save();
    res.status(200).json(saveNewNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create Many
newsRouter.post('/signin', (req, res) => {});

// Update One
newsRouter.get('/', (req, res) => {
  res.send('news');
});

// Get One
newsRouter.get('/', (req, res) => {
  res.send('news');
});

// Get All
newsRouter.get('/', (req, res) => {
  res.send('news');
});

// Delete One

export default newsRouter;
