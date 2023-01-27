import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: String,
  textbooks: [Schema.Types.ObjectId],
});

SubjectSchema.index({ name: 'text', textbook: 'text' });

const Subject = mongoose.model('jamb_subject', SubjectSchema);

export default Subject;
