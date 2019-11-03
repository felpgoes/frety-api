const Sequelize = require('sequelize');
const dbConfig = require('./src/config/database');

const User = require('./src/models/usersModel');

const database = new Sequelize(dbConfig);
User.init(database)

module.exports = database;