/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable("usuarios", table => {
            table.increments("id").primary()
            table.string("nome", 255).notNullable()
            table.string("email", 255).notNullable().unique()
            table.string("senha", 60).notNullable()
            table.boolean("ativo").notNullable()
            table.timestamp("data_criacao").defaultTo(knex.fn.now())
        }).then(function () {
            return knex("usuarios").insert([
                { nome: "admin", email: "admin@jota.com", senha: "123", ativo: true }
            ])
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("usuarios")

};
exports.config = { transaction: false };