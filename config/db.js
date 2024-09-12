
// config/db.js
// config/db.js
const knex = require('knex');
const config = require('../knexfile.js');

const env = process.env.DB_NAME || 'development';
console.log("BANCO DE DADOS" + process.env.DB_NAME);

// Verifica se o ambiente é 'development' para mostrar logs
if (env === 'development') {
    console.log(`Usando o ambiente: ${env}`);
}

let db;

try {
    db = knex(config[env]);
    console.log(`Conexão com o banco de dados estabelecida no ambiente: ${env}`);
} catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1); // Encerra o processo com erro
}

module.exports = db;


// const Pool = require('../knexfile.jsl');
// const pool = new Pool({
//   /* ... */
// });
// const connection = await pool.connect();

// try {
//   return await knex.connection(connection); // knex here is a query builder with query already built
// } catch (error) {
//   // Process error
// } finally {
//   connection.release();
// }