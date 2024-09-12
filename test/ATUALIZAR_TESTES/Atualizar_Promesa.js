const db = require("../../config/db")

// basico
//db("nome da tabela")
db("perfis")
    .where({ nome: "comumd" })
    .update({ nome: "comum", rotulo: "Comum" })
    .then(ret => {
        console.log("Alteração Realizada com Sucesso = " + ret)
        if (ret) {
            console.log("é isso ai");

        } else {
            console.log("não é isso não");

        }
    }
    )


    .finally(() => db.destroy())



