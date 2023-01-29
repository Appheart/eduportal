import { Router } from 'express';
import { NewsModel } from '../models/index.js';

const newsRouter = Router();

// Get All
newsRouter.get('/', async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page - 1) || 0;
    const limit = parseInt(req.query.limit) || 12;
    const result = {};
    const totalNews = await NewsModel.find().sort('-publishedOn');
    let startIndex = pageNumber * limit;
    const endIndex = (pageNumber + 1) * limit;
    result.totalNews = totalNews;

    if (startIndex > 0) {
      result.previous = {
        pageNumber: pageNumber - 1,
        limit: limit,
      };
    }

    if (endIndex < (await NewsModel.find())) {
      result.next = {
        pageNumber: pageNumber + 1,
        limit: limit,
      };
    }

    result.data = await NewsModel.find()
      .sort('-publishedOn')
      .skip(startIndex)
      .limit(limit)
      .exec();

    result.rowsPerPage = limit;

    const data = res.json(result.data);

    return data;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Preferenced
newsRouter.get('/p/', async (req, res) => {
  try {
    result = await NewsModel.find();

    const data = res.json(result.data);

    return data;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get One
newsRouter.get('/:id', async (req, res) => {
  const news = await NewsModel.findById({ _id: req.params.id });

  res.send(news);
  return news;
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

newsRouter.delete('/:id', async (req, res) => {
  const news = await NewsModel.findByIdAndDelete({ _id: req.params.id });

  res.send(news);
  return news;
});
export default newsRouter;
