
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

    await knex('usuarios').insert([
        { nome: "master", email: 'master@master.com', senha: process.env.SENHA_MASTER, ativo: 1 },
    ]);
};
