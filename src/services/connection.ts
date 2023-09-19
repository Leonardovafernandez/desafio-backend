const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost', // Host do banco de dados local
        port: 5432, // Porta padrão do PostgreSQL
        user: 'postgres', // Nome de usuário do PostgreSQL
        password: '33741775', // Senha do PostgreSQL
        database: 'desafio',
    }
});

export default knex;
