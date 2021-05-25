const express = require ('express');
const apiRouter = require('./routes/api') //Arquivo de rotas
const app = express();
const colors = require('colors');
const cors = require('cors');

require('./db'); //Requerimento de nossa BD



/* Middleware para trocar informações, A ordem de carregamento do middleware é importante,
 as funções de middleware que carregam primeiro também são executadas primeiro.*/
 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use('/api', apiRouter) 

/* Nossa porta do APi */

app.listen(5000, () =>{
    console.log('SERVER ON PORT 5000'.bgGreen.black)
})