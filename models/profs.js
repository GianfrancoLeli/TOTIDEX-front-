// Neste arquivo incluímos os parâmetros de nossa tabela que serão exportados através do Sequelize

module.exports = (sequelize, type) => {
    return sequelize.define('prof', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: type.STRING,
        edade: type.INTEGER,
        area: type.STRING,
        local: type.STRING,
        image: type.STRING,
    })
}

