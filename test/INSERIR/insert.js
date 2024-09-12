//test/insert.js

const db = require("../../config/db.js");

const novosPerfis = [
    { nome: "leso3", rotulo: "Leso3" },
    // { nome: "seo", rotulo: "SEO" }
];

db("perfis").insert(novosPerfis)
    .then(res => console.log('Registro inserido com sucesso:', res))
    .catch(err => console.error('Erro ao inserir registro:', err))
    .finally(() => db.destroy());
