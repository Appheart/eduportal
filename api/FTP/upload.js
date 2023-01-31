import multer from 'multer';
import { Router } from 'express';

const uploadRouter = Router();

// Start by creating some disk storae options:
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },

  // Sets file(s) to be saved in uploads folder in same directory
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

// Set saved storage options:
const upload = multer({ storage: storage }).array('file');

uploadRouter.post('/', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.files);
  });
});

export default uploadRouter;
