
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

    await knex('usuarios').insert([
        { nome: "admin", email: 'admin@admin.com', senha: "admin@123", ativo: 1 },
    ]);
};
