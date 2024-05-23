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

const getMensBathroomChangingTables = async () => {
    const mensBathroomChangingTables = models.ChangingTablesModel.findAll({
        where: {
            [Op.and]: [{ womensBathroom: false }, { mensBathroom: true }],
        },
    })
    return mensBathroomChangingTables
}

const getWomensBathroomChangingTables = async () => {
    const womensBathroomChangingTables = models.ChangingTablesModel.findAll({
        where: {
            [Op.and]: [{ womensBathroom: true }, { mensBathroom: false }],
        },
    })
    return womensBathroomChangingTables
}

const getBothBathroomChangingTables = async () => {
    const bothBathroomChangingTables = models.ChangingTablesModel.findAll({
        where: {
            [Op.and]: [{ womensBathroom: true }, { mensBathroom: true }],
        },
    })
    return bothBathroomChangingTables
}

module.exports = { getAllChangingTables, getOneChangingTable, getMensBathroomChangingTables, getWomensBathroomChangingTables, getBothBathroomChangingTables }