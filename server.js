//importações
const express = require('express');

//configuração da aplicação
const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('estilo'));

//endpoints
app.get('/', (requisicao, resposta) => {
    resposta.render('formulario');
});

app.post('/', (requisicao, resposta) => {
    resposta.render('sucesso');
});

//listen
app.listen(4011, () => {
    console.log('Servidor inicializado');
});
