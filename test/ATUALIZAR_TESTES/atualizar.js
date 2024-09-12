const db = require("../../config/db")

// db("perfis").where().update({});

async function atualizar() {
    try {
        await db("perfis")
            .where({ rotulo: "Comum" })
            .update({ nome: "comums" });

        console.log("Atualização realizada com sucesso");

        // Recupera todos os registros e retorna apenas o campo 'nome'
        const nomes = await db("perfis").select("nome");


    } catch (error) {
        return console.error("Tabela não encontrada == " + error);
        // cuidado com o retorno erro , tuirar para produção

    }


}

atualizar()