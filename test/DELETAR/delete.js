const db = require("../../config/db")
//====================================
// excluir registro selecionado
//====================================
// db("perfis")
//     .where({ id: 7 })
//     .del()
//     .then(resp => console.log(resp))
//     .finally(() => db.destroy())



//====================================
// excluir todos os registros
//====================================
// db("perfis")
//     .del()
//     .then(resp => console.log(resp))
//     .finally(() => db.destroy())





//====================================
// Excluido Usando filtro
//====================================
// db("perfis")
//     .where("nome", "leso")
//     .del()
//     .then(resp => console.log(resp))
//     .catch(error => console.error("Erro ao deletar:", error))
//     .finally(() => db.destroy())

// db("usuario-perfis").where({ usuario_id: 34 }).del()
//     .then(res => console.log(res))
//     .finally(() => db.destroy())



db("usuarios").del()
    .then(res => {
        console.log(`${res} registros deletados`);
    })
    .catch(err => {
        console.error("Erro ao deletar registros:", err);
    })
    .finally(() => {
        db.destroy(); // Fecha a conexão com o banco
    });

db("usuario-perfis").del()
    .then(res => {
        console.log(`${res} registros deletados`);
    })
    .catch(err => {
        console.error("Erro ao deletar registros:", err);
    })
    .finally(() => {
        db.destroy(); // Fecha a conexão com o banco
    });