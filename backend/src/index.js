const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);
/*
    Métodos HTTP:
    - GET: Buscar uma informação no backend
    - POST: Criar uma informação no backend
    - PUT: Alterar uma informação no backend
    - DELETE: Deletar uma informação no backend
*/
/*
    Tipos de parâmetros:
    - Query Params: Parâmetros nomeados enviados na rota após o ? e servem para
    paginação, filtros;
    - Route Params: Parâmetros utilizados para identificar recursos;
    - Request Body: Corpo da requisição, utilizado para criar ou alterar
    recursos
*/ 
/* 
    SQL: MySQL, SQLite, PostgreSQL... (Iremos utilizar o SQLite)
    NoSQL: MongoDB, CouchDB...
*/
/* 
    Driver: SELECT * FROM users;
    Query Builder: table('users').select('*').where()
    --> Iremos utilizar o Query Builder KNEX
    --> npm install knex
    --> npm install sqlite3
    --> Para configurar a conexão: 
        --> npx knex init
*/

//Definindo porta para rodar o servidor
app.listen(3333);