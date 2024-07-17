const diaperChangingTablesTemplate = (connection, Sequelize) => {
    return connection.define('diaperChangingTables', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        locationName: { type: Sequelize.STRING },
        address: { type: Sequelize.TEXT },
        femaleRestroom: { type: Sequelize.BOOLEAN },
        maleRestroom: { type: Sequelize.BOOLEAN },
        unisexRestroom: { type: Sequelize.BOOLEAN },
    }, { paranoid: true })
}

module.exports = { diaperChangingTablesTemplate }