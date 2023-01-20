import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  link: String,
  source: String,
  illustration: String,
  tags: Array,
  publishedOn: String,
});

const News = mongoose.model('News', newsSchema);

export default News;
