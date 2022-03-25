const dotenv = require('dotenv').config()
const Sequelize = require('sequelize')
const connection = require('./database')

const sequelize = new Sequelize(connection[process.env.NODE_ENV]['database'], connection[process.env.NODE_ENV]['username'], connection[process.env.NODE_ENV]['password'], {
    host: connection[process.env.NODE_ENV]['host'],
    port: connection[process.env.NODE_ENV]['port'],
    dialect: 'mysql',
    logging: true,
});

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

module.exports = sequelize;
