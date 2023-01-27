import { Router } from 'express';
import { ApprovedRegCentreModel } from '../../models/index.js';

const AccreditedCentersRouter = Router();

// Get All
AccreditedCentersRouter.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit) || 50;
  const page = req.query.page || 0;
  let startIndex = page * limit;
  const centres = await ApprovedRegCentreModel.find()
    .limit(limit)
    .skip(startIndex);

  res.send(centres);
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
