const db = require("../../config/db.js");


// consultar todos os itens
// db("perfis")
//     .limit(4)
//     .then(res => console.log(res))
//     .then(itens => console.log(itens))
//     .finally(() => db.destroy())


// consultar todos os itens usando um array e selecionando os itens
db("perfis")

    .then(res => res.map(p => [p.nome, p.rotulo]))
    .then(itens => console.log(itens) + console.log(itens.length))
    .finally(() => db.destroy())



// consultar itens selecionados
// db("perfis")
//     .limit(4)
//     .select("nome", "id")
//     .then(res => console.log(res))
//     .finally(() => db.destroy())


// segundaforma se realizar um select , agora usando o from
// db.select("nome", "id")
//     .from("perfis").limit(4)
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

// para limitar a quandidade de resiultados
// usar o  .limit(int)


// FILTAR POR ID

// db("perfis")
//     .where({ id: 3 })
//     .first() // retira do array
//     // .then(res => console.log(res))// retorna o obj completo
//     .then(res => console.log(res.nome)) // retorna o item selecionado
//     .finally(() => db.destroy())
