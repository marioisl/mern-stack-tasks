const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/mern-tasks';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('DB is connected');
  })
  .catch(err => {
    console.error('Error connecting to DB:', err);
  });

module.exports = mongoose;