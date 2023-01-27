import { Router } from 'express';
import AccreditedCentersRouter from './AccreditedCenters.js';
import SubjectRouter from './Subject.js';
import TextBookRouter from './TextBook.js';

const JambRouter = Router();

JambRouter.use('/accredited_centers', AccreditedCentersRouter);
JambRouter.use('/subjects', SubjectRouter);
JambRouter.use('/textbooks', TextBookRouter);

export default JambRouter;
