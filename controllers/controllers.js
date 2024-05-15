const { getAllChangingTables, getOneChangingTable } = require("/models/models")

const getAllChangingTablesController = async (request, response) => {
    const allChangingTables = await getAllChangingTables()

    return response.send(allChangingTables)
}

const getOneChangingTableController = async (request, response) => {
    const { id } = request.params
    const oneChangingTable = await getOneChangingTable(parseInt(id))

    return response.send(oneChangingTable)
}

module.exports = {getAllChangingTablesController, getOneChangingTableController}