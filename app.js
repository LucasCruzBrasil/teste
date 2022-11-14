const express = require('express');
const morgan = require('morgan');
const rotaUsuarios = require('./routes/usuarios');
const rotaClientes = require('./routes/clientes');

const app = express();

var cors = require('cors');
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

app.use(morgan('dev'));
app.use('/usuarios', rotaUsuarios);
app.use('/clientes', rotaClientes);



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

app.use((req, res, next) => {
    const erro = new Error('nao encontrado');
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensagem
        }

    })
})

module.exports = app;