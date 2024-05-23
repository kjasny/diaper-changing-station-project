const { getAllChangingTables, 
    getOneChangingTable, 
    getBothBathroomChangingTables, 
    getMensBathroomChangingTables, 
    getWomensBathroomChangingTables 
} = require("/models/models")

const getAllChangingTablesController = async (request, response) => {
    const allChangingTables = await getAllChangingTables()

    return response.send(allChangingTables)
}

const getOneChangingTableController = async (request, response) => {
    const { id } = request.params
    const oneChangingTable = await getOneChangingTable(parseInt(id))

    return response.send(oneChangingTable)
}

const getChangingTablesInMenBathroomsController = async (request, response) => {
    const mensBathroomChangingTables = await getMensBathroomChangingTables()

    return response.send(mensBathroomChangingTables)
}

const getChangingTablesInWomenBathroomsController = async (request, response) => {
    const womensBathroomChangingTables = await getWomensBathroomChangingTables()

    return response.send(womensBathroomChangingTables)
}

const getChangingTablesInBothBathroomsController = async (request, response) => {
    const bothBathroomChangingTables = await getBothBathroomChangingTables()

    return response.send(bothBathroomChangingTables)
}

module.exports = {getAllChangingTablesController, 
    getOneChangingTableController, 
    getChangingTablesInBothBathroomsController, 
    getChangingTablesInMenBathroomsController, 
    getChangingTablesInWomenBathroomsController
}