<h1 align="center"> 
	🔐API Rest NodeJS com JWT.
</h1>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/yuriduarte/API-Rest-NodeJS?color=%2304D361">


	
 
  
</p>


<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">Licença</a>
</p>

## 📋 Projeto

* 🔐Uma API de autenticação utilizando NodeJS, Express, Mysql e Autenticação JWT. <br>

## 💻 Como usar

Para clonar e rodar essa aplicação você precisará do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) (que vem com [npm](http://npmjs.com)). 
<br>
Na sua linha de comando:

```bash
# Clone esse repositório
$ git clone https://github.com/LucasCruzBrasil/teste.git


# Instale as dependencias
$ npm install

# Rode a aplicação
$ npm start
```

## 👨‍💻 Tecnologias

Essas são as tecnologias utilizadas nesse projeto

📟- **Backend:** [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/pt-br/), [Mysql](https://www.mysql.com/), [JSON WEB TOKEN](https://www.npmjs.com/package/jsonwebtoken).


## Arquitetura REST

A seguir está uma configuração genérica de local host na porta 8000:

- Listagem de Clientes - GET: [http://localhost:8000/clientes](http://localhost:8000/clientes)

   . Em caso de sucesso retorna todos os clientes já cadastrados no banco de dados, cada cliente no formato JSON, contendo os respectivos dados.
   
- Adicionar Clientes - POST: [http://localhost:8000/clientes/create ](http://localhost:8000/clientes/create)
  
  . Adiciona um cliente ao banco de dados, sendo necessário inserir (nome, sobre_nome, cpf, nome_mae, cep, logradouro, bairro, localidade, uf, numero). O Id é gerado automaticamente. 
  
- Buscar cliente por Id -         GET: http://localhost:8000/clientes/{inserir-id-aqui}

  . Utiliza o Id gerado automaticamente quando o cliente é adicionado ao banco de dados. Retorna o arquivo no formato JSON com sucesso caso exista. Para essa busca é necessário inserir o id_cliente.
  

- Deletar um cliente por Id - DELETE: http://localhost:8000/clientes/{inserir-id-aqui}

   . Remove o cliente utilizando o Id que foi gerado automaticamente, utilizando o método DELETE. 

---

Feito por Lucas Ferreira :wave: [Entre em contato comigo!](https://www.linkedin.com/in/lucas-cruz-727554150/)
:email: [lucaszaratustra@gmail.com](mailto:lucaszaratustra@gmail.com) &nbsp;
GitHub: [github.com/LucasCruzBrasil](https://github.com/LucasCruzBrasil) &nbsp;

