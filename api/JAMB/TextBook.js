import { Router } from 'express';
import { TextBookModel } from '../../models/index.js';

const TextBookRouter = Router();

TextBookRouter.get('/', async (req, res) => {
  const TextBooks = await TextBookModel.find();

  res.send(TextBooks);
});

export default TextBookRouter;
