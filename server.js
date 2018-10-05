//importações
const express = require('express');
const bodyParser = require('body-parser');
const db = require('express-mongo-db');

//configuração da aplicação
const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('estilo'));
app.use(bodyParser.urlencoded());//para acessar o código fonte, usar ctrl+clique
app.use(db('mongodb://localhost/hackburguer'));

//endpoints
app.get('/', (requisicao, resposta) => {
    resposta.render('formulario');
});

app.post('/', (requisicao, resposta) => {
    console.log(requisicao.body);
    
    requisicao.db.collection('pedidos').insert(requisicao.body, (erro) =>{
        if(erro){
            resposta.render('erro');
            return;
        }

        resposta.render('sucesso');
    });
    
});

//listen
app.listen(4011, () => {
    console.log('Servidor inicializado');
});
