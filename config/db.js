require('dotenv').config();

import { connect } from 'mongoose';

connect(process.env.MONGODBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => console.log(err));
