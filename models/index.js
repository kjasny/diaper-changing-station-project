const Sequelize = require('sequelize')
const configs = require('../configs/sequelize')
const environment = process.env.NODE_ENV || 'development'
const config = configs[environment]
const {
  database, username, password, host, dialect
} = config
const {changingTablesTemplate} = require("./changingTablesTemplate")

const connection = new Sequelize(database, username, password,  {host, dialect})

const ChangingTablesModel = changingTablesTemplate(connection, Sequelize)

module.exports = { ChangingTablesModel }
