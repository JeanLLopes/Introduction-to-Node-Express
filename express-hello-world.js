//PARA RODAR O PROJETO USE O COMANDO
//node express-hello-world.js 
require('dotenv').config();
const express = require('express');

const app = express();

//BUSCA O ARQUIVO .env PARA BUSCAR A PORTA, OU PEGA A PORTA PADRAO
//QUE É A 3000 COMO INFORMADO ABAIXO
const port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    res.send('\n\nHello World Express!\n\n');
})

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});