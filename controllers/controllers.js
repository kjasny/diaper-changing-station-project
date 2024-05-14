const {getAllChangingTableLocations} = require("/models/models")

const getAllChangingTablesController = async (request, response) => {
    const allChangingTables = await getAllChangingTables()

    return response.send(allChangingTables)
}

module.exports = {getAllChangingTablesController}