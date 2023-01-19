const app = require('express')();

const port = process.env.PORT || 3000;

const UserRouter = require('./api/User');

// For accepting post fom data
const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
