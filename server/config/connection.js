const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../.env' )});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/clusterecho', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
