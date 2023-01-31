import { Router } from 'express';
import downloadRouter from './downoad.js';
import uploadRouter from './upload.js';

const ftpRouter = Router();

ftpRouter.use('/upload', uploadRouter);
ftpRouter.use('/download', downloadRouter);

export default ftpRouter;
