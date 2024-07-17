const models = require(".")

const getAllChangingTables = async () => {
    const allChangingTables = await models.diaperChangingTablesModel.findAll()

    return allChangingTables
}

const getOneChangingTable = async (id) => {
    const oneChangingTable = models.diaperChangingTablesModel.findOne({
        where: {id}
    })
    return oneChangingTable
}

const getMensBathroomChangingTables = async () => {
    const mensBathroomChangingTables = models.diaperChangingTablesModel.findAll({
        where: {
            [Op.and]: [{ womensBathroom: false }, { mensBathroom: true }],
        },
    })
    return mensBathroomChangingTables
}

const getWomensBathroomChangingTables = async () => {
    const womensBathroomChangingTables = models.diaperChangingTablesModel.findAll({
        where: {
            [Op.and]: [{ womensBathroom: true }, { mensBathroom: false }],
        },
    })
    return womensBathroomChangingTables
}

const getBothBathroomChangingTables = async () => {
    const bothBathroomChangingTables = models.diaperChangingTablesModel.findAll({
        where: {
            [Op.and]: [{ womensBathroom: true }, { mensBathroom: true }],
        },
    })
    return bothBathroomChangingTables
}

module.exports = { getAllChangingTables, getOneChangingTable, getMensBathroomChangingTables, getWomensBathroomChangingTables, getBothBathroomChangingTables }