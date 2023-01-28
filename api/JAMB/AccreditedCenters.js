import { Router } from 'express';
import { ApprovedRegCentreModel } from '../../models/index.js';

const AccreditedCentersRouter = Router();

// Get All
AccreditedCentersRouter.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const page = req.query.page - 1 || 0;
    let startIndex = page * limit;
    const endIndex = (page + 1) * limit;
    const result = {};
    const centres = await ApprovedRegCentreModel.find();

    result.centres = centres;

    if (startIndex > 0) {
      result.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    if (endIndex < (await ApprovedRegCentreModel.find())) {
      result.next = {
        page: page + 1,
        limit: limit,
      };
    }

    result.data = await ApprovedRegCentreModel.find()
      .limit(limit)
      .skip(startIndex)
      .exec();

    result.rowsPerPage = limit;

    const data = res.json(result.data);

    return data;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get One
AccreditedCentersRouter.get('/:id', async (req, res) => {
  const centre = await ApprovedRegCentreModel.findById({ _id: req.params.id });

  res.send(centre);
  return centre;
});

// Create One
AccreditedCentersRouter.post('/', async (req, res) => {});

// Update One
AccreditedCentersRouter.patch('/', (req, res) => {
  res.send('news');
});

// Delete One
AccreditedCentersRouter.delete('/:id', async (req, res) => {});
export default AccreditedCentersRouter;

const SearchQuery = (':params', async (req, res) => {});
