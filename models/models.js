const models = require(".")

const getAllChangingTables = async () => {
    const allChangingTables = await models.ChangingTablesModel.findAll()

    return allChangingTables
}

module.exports = {getAllChangingTables}