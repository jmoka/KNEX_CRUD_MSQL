/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('perfis', table => {
            table.increments('id').primary();
            table.string('nome', 255).notNullable().unique();
            table.string('rotulo', 255).notNullable().unique();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('perfis');

};

exports.config = { transaction: false };