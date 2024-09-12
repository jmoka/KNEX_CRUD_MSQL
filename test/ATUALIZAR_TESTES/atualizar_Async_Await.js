const db = require("../../config/db")
// Usando o Async - Await


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
    .then(ret => console.log(ret))
    .finally(() => db.destroy())