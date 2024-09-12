// const promessa = new Promise((resolve) => {
//     setTimeout(resolve, 3000);
// });

// async function teste() {
//     const x = "teste de promise resolvido"
//     console.log("inicializando ......");
//     await promessa
//     console.log(x);

// }

// teste()




/// nesse teste criamos primeiro uma promese
// A promise aguarda 3 segundos para resolver
// quandop um função é asinalada como async a mesma tera uma espara com o await
// ou seja a promisse asinalada após o await terá que ser resolvida antes de prosegir
// pois se trata de um função asincrona como o usu do async e await
// e await so pode ser usando em funções async
// o await irá esperar ate que a promisse seja resolvida


// obs toda função marcada como async retorna uma promise
// que pode ser resolvida com .then

async function promeseAsync() {
    return "Função async retorna Promise"
}
console.log(promeseAsync());
promeseAsync().then(ret => console.log(ret))