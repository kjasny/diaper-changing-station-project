const changingTablesTemplate = (connection, Sequelize) => {
    return connection.define('changingTables', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    }, { paranoid: true })
}

module.exports = { changingTablesTemplate }