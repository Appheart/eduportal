import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TextBookSchema = new Schema({
  name: String,
  author: [String],
  publisher: {
    name: String,
    contact: [String],
  },
  subject: Schema.Types.ObjectId,
});

TextBookSchema.index({ name: 'text', textbook: 'text' });

const TextBook = mongoose.model('jamb_textbook', TextBookSchema);

export default TextBook;
