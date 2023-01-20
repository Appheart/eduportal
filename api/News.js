import { Router } from 'express';
import { Model } from 'mongoose';
import { NewsModel } from '../models/index.js';

const newsRouter = Router();

// Get All
newsRouter.get('/', async (req, res) => {
  try {
    const data = await NewsModel.find();

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get One
newsRouter.get('/:id', (req, res) => {
  res.send('news');
});

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
newsRouter.patch('/', (req, res) => {
  res.send('news');
});

// Delete One

export default newsRouter;
