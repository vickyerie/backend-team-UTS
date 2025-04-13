const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');

const connectionString = new URL(config.database.connection);
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);
const db = mongoose.connection;
db.once('open', () => {
  logger.info('Connected to MongoDB');
});

// Load all schemas from 1 file
const schemas = require('./schemas')(mongoose);

module.exports = {
  db,
  ...schemas,
};

