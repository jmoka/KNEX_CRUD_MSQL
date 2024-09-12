/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {

  await knex('perfis').insert([
    { nome: "comun", rotulo: 'Comum' },
    { nome: "admin", rotulo: 'Administrador' },
    { nome: "master", rotulo: 'Master' }
  ]);
};
