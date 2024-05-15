const models = require(".")

const getAllChangingTables = async () => {
    const allChangingTables = await models.ChangingTablesModel.findAll()

    return allChangingTables
}

const getOneChangingTable = async (id) => {
    const oneChangingTable = models.ChangingTablesModel.findOne({
        where: {id}
    })
    return oneChangingTable

}

module.exports = { getAllChangingTables, getOneChangingTable }