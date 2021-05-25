/* Neste arquivo iremos codificar a criação do DB */

const Sequelize = require ('sequelize'); // Constante para usar Sequelize
const modelProfe = require ('./models/profs'); //Rota de nosso modelo de BD

    /* Usando MySQL para BD externa (remotemysql.com) + Sequelize */

const sequelize = new Sequelize(

    'EqVfzChdZ2', // Username
    'EqVfzChdZ2', // Database name
    'kmRNFbmxpt', // Password
    {
        /* Comunicação de  Sequelize com nosso BD */
        host: 'remotemysql.com',
        dialect: 'mysql'
    }

  );

    /* Usando SQlite para trabalhar local + Sequelize */
    /* 
    const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './bdNome.db'
    });

     */

    /* Método de sincronização de tabela */

const Prof = modelProfe (sequelize, Sequelize)

sequelize.sync({ force: false }) 
.then(() => {
    console.log ('Tabelas Atualizadas'.bgGreen.black)
})

/* Modulo para exportar minha BD */

module.exports ={
    Prof
}