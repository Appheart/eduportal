import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ApprovedRegCentreSchema = new Schema({
  state: String,
  town: String,
  ctrName: String,
});

ApprovedRegCentreSchema.index({ state: 'text', ctrName: 'text' });

const ApprovedRegCentre = mongoose.model(
  'accredited_jamb_center',
  ApprovedRegCentreSchema
);

export default ApprovedRegCentre;
