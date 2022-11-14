const mysql = require('../mysql');

//insere  clientes
exports.postInsereCliente = async (req, res, next) => {
    try {
        const query = "INSERT INTO clientes (id_cliente, nome, sobre_nome, cpf, nome_mae, cep, logradouro, bairro, localidade, estado, numero) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        const result = await mysql.execute(query, [
            req.body.id_cliente,
            req.body.nome,
            req.body.sobre_nome,
            req.body.cpf,
            req.body.nome_mae,
            req.body.cep,
            req.body.logradouro,
            req.body.bairro,
            req.body.localidade,
            req.body.estado,
            req.body.numero,

        ]);

        const response = {

            mensagem: "Cliente inserido no banco com sucesso",
            id_cliente: result.id_cliente,
            nome: req.body.nome,
            sobre_nome: req.body.sobre_nome,
            cpf: req.body.cpf,
            nome_mae: req.body.nome_mae,
            cep: req.body.nome_mae,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            localidade: req.body.localidade,
            estado: req.body.estado,
            numero: req.body.numero,


            request: {
                tipo: 'POST',
                descricao: "Clientes",
                url: 'http://localhost:8000/clientes'
            }
        }
        return res.status(201).send(response);
    } catch (error) {
        console.log("response");
        return res.status(500).send({ error: error })
    }
}

exports.getClientes = async (req, res, next) => {
    try {
        const result = await mysql.execute("SELECT * FROM clientes")
        const response = {
            quantidade: result.length,

            clientes: result.map(client => {
                return {
                    id_cliente: client.id_cliente,
                    nome: client.nome,
                    sobre_nome: client.sobre_nome,
                    cpf: client.cpf,
                    nome_mae: client.nome_mae,
                    cep: client.cep,
                    logradouro: client.logradouro,
                    bairro: client.bairro,
                    numero: client.numero,
                    request: {
                        tipo: 'GET',
                        descricao: '',
                        url: 'http://localhost:8000/clientes/' + client.id_cliente
                    }
                }
            })
        }

        return res.status(200).send(response)

    } catch (error) {
        console.error(error)
        return res.status(500).send({ error: error })
    }


}

//lista por  id um esprcífico
exports.getListaUmCliente = async (req, res, next) => {
    try {
        const query = "SELECT * FROM clientes WHERE id_cliente = ?;";
        const result = await mysql.execute(query, [req.params.id_cliente]);

        if (result.length == 0) {
            return res.status(404).send({
                message: 'Não foi encontrado cliente para este ID'
            })
        }
        const response = {
            valores: {
                id_cliente: result[0].id_cliente,
                nome: result[0].nome,
                sobre_nome: result[0].sobre_nome,
                cpf: result[0].cpf,
                nome_mae: result[0].nome_mae,
                cep: result[0].cep,
                logradouro: result[0].logradouro,
                bairro: result[0].bairro,
                numero: result[0].numero,
                request: {
                    tipo: 'GET',
                    descricao: 'Retorna um cliente específico '

                }

            }
        }
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}


//deleta um valor 
exports.deleteDeletaUmCliente = async (req, res, next) => {
    try {
        const query = "DELETE FROM clientes WHERE id_cliente = ?";
        const result = await mysql.execute(query, [req.params.id_cliente]
        )
        const response = {

            mensagem: "cliente deletado com sucesso",

            request: {
                tipo: 'POST',
                descricao: 'INSERE UM CLIENTE',
                url: 'http://localhost:3000/create',
                body: {
                    id_cliente: result,
                }
            }
        }
        return res.status(202).send(response);

    } catch (error) {
        res.status(500).send({
            mensagem: error,
            response: null
        })
    }
}








//altera cliente update
exports.updateCliente = async (req, res, next) => {
    try {
        const query = `UPDATE clientes
      SET nome = ?,
      sobre_nome = ?,
      cpf = ?,
      nome_mae = ?,
      cep = ?,
      logradouro = ?,
      bairro = ?,
      localidade = ?, 
      estado = ?,
      numero = ?
      WHERE id_cliente= ?`;

        const result = await mysql.execute(query, [
            req.body.nome,
            req.body.sobre_nome,
            req.body.cpf,
            req.body.nome_mae,
            req.body.cep,
            req.body.logradouro,
            req.body.bairro,
            req.body.localidade,
            req.body.estado,
            req.body.numero,
            req.body.id_cliente

        ]);

        const response = {
            mensagem: "Alteração de dados do cliente feito com sucesso",
            cliente_atualizado: {
                id_valor: result.id_cliente,
                nome: req.body.nome,
                sobre_nome: req.body.sobre_nome,
                cpf: req.body.cpf,
                nome_mae: req.body.nome_mae,
                cep: req.body.nome_mae,
                logradouro: req.body.logradouro,
                bairro: req.body.bairro,
                localidade: req.body.localidade,
                estado: req.body.estado,
                numero: req.body.numero,

                request: {
                    tipo: 'PACTH',
                    descricao: 'cliente atualizado com sucesso ',

                }
            }
        }

        console.log(response)
        return res.status(202).send(response);


    } catch (error) {
        return res.status(500).send({ error: error })
    }
}
