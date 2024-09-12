
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

    await knex('usuario-perfis').insert([
        { usuario_id: 1, perfil_id: 3 },
    ]);
};
