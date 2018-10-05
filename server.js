const express = require('express');
const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send('oi');
});

app.listen(4011, () => {
    console.log('Servidor inicializado');
});
