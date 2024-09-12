const db = require('./config/db')
// EXECUTA O SISTEMA
async function executar(acao, nomeUser, email, senha, ativo, IdPerfil, idUsuario, nomePerfil, rotulo) {
    if (acao == 1) {
        // inserir salvar usuario
        const usuario = await salvarUsuario(nomeUser, email, senha, ativo, IdPerfil);
    } else if (acao == 2) {
        // salvar perfil
        const perfil = await salvarPerfil(nomePerfil, rotulo);
    } else if (acao == 3) {
        // atualizar perfil do usuario
        const novoPerfilUsuario = await atualizarPerfilusuario(idUsuario, IdPerfil)
    }
    // TABELA "usuario-perfis"
    // Inserir o Perfil do Usuário
    async function InserirUsuararioPerfil(idUsuario, IDPerfilDafault) {
        const novoUsuarioPerfil = { usuario_id: idUsuario, perfil_id: IDPerfilDafault }
        console.log("Inserindo Usuario-Perfil ....");
        console.log(novoUsuarioPerfil.usuario_id)
        await db("usuario-perfis").insert({ usuario_id: novoUsuarioPerfil.usuario_id, perfil_id: IDPerfilDafault })
            .finally(() => db.destroy())
            .catch(err => console.log(err))
        console.log("Associação inserida com sucesso:");
    }
    // atualizar Perfil Usuario
    async function atualizarPerfilusuario(idUsuario, IdPerfil) {
        console.log("idUsuario =" + idUsuario);
        console.log("IdPerfil =" + IdPerfil);
        const idEncontadoUsuario_perfil = await db("usuario-perfis")
            .where({ usuario_id: idUsuario }).first()
        if (idEncontadoUsuario_perfil == undefined) {
            console.log("usuario não encontrado");
            await db("usuario-perfis")
                .finally(() => db.destroy())
        } else {
            console.log("usuario encontrado");
            console.log("idEncontadoUsuario_perfil  = " + idEncontadoUsuario_perfil.usuario_id);
            await db("usuario-perfis")
                .where({ usuario_id: idUsuario })
                .update({ perfil_id: IdPerfil })
                .finally(() => db.destroy())
                .catch(err => console.log(err))
        }
    }
    // FUNÇÃO DE SALVAR USUARIO
    async function salvarUsuario(nome, email, senha, ativo, IdPerfil) {
        // realizar consulta para saber se o usuario existe
        // realizar a consulta através do email
        const resposta = await db("usuarios").where("email", email).orWhere({ nome: nome })
        //caso exista chama atualizarUsuario caso contrario inserirUsuario
        resposta.length == 1 ? atualizarUsuario(nome, email, senha, ativo) : inserirUsuario(nome, email, senha, ativo, IdPerfil)
    }
    // ATUALIZAR USUARIO
    async function atualizarUsuario(nome, email, senha, ativo) {
        console.log("Atualilzando ....");
        await db("usuarios")
            .where({ email: email })
            .orWhere({ nome: nome })
            .update({ nome: nome, email: email, senha: senha, ativo: ativo })
            .then(resp => console.log(resp))
            .finally(() => db.destroy())
            .catch(err => console.log(err))
        console.log("Atualização Com Sucesso");
    }
    //INSERIR USUARIO
    async function inserirUsuario(nome, email, senha, ativo, perfil) {
        const novoUsuario = [{ nome: nome, email: email, senha: senha, ativo: ativo }]
        console.log("Inserindo Usuário....");
        const [idUsuario] = await db("usuarios")
            .insert(novoUsuario)
        console.log("idUsuario + " + idUsuario);

        console.log("Usuário inserido com sucesso, ID:", idUsuario);
        await InserirUsuararioPerfil(idUsuario, perfil)
    }
    // FUNCÃO DE SALVAR PERFIL
    async function salvarPerfil(nome, rotulo) {
        // CONSULTAR PERFIL
        const resposta = await db("perfis")
            .where({ nome: nome })
            .orWhere({ rotulo: rotulo })
        console.log(resposta);
        resposta.length == 1 ? atualizarPerfil(nome, rotulo, ...resposta) : inserirPerfil(nome, rotulo, ...resposta);
    }
    async function atualizarPerfil(nome, rotulo, resposta) {
        if (resposta.nome == nome && resposta.rotulo != rotulo) {
            console.log("atualizar rotulo");
            await db("perfis").where({ nome: nome })
                .update({ rotulo: rotulo })
                .finally(() => db.destroy())
                .catch(err => console.log(err))
            console.log("Rotulo Atualizado com Sucesso = " + resposta[0]);
        } else if (resposta.nome != nome && resposta.rotulo == rotulo) {
            console.log("atualizar nome");
            await db("perfis").where({ rotulo: rotulo })
                .update({ nome: nome })
                .finally(() => db.destroy())
                .catch(err => console.log(err))
            console.log("Nome Atualizado com Sucesso = " + resposta[0]);
        } else if (resposta.nome == nome && resposta.rotulo == rotulo) {
            console.log("Não Pode Atualizar e nem inserir Rótulo e Nome já Existem");
            console.log(`Troque o nome = ${nome} e o Rotulo = ${rotulo}`);
        } else {
            inserirPerfil(nome, rotulo)
        }
    }
    async function inserirPerfil(nome, rotulo) {
        console.log("inserir perfil chamado");
        const novoPerfil = [{ nome: nome, rotulo: rotulo }]
        await db("perfis").insert(novoPerfil)
            .then(resp => console.log("perfil inserido com sucesso id =" + resp))
            .finally(() => db.destroy())
            .catch(err => console.log(err))
    }
}
// ESCOLHA UMA AÇÃO
// 1-salvarUsuario / 2-salver perfil / 3-Atualizar Perfil Usuario
const acao = 1;

//MANIPULAR TABELA PERFIS
// CASO O NOME JA EXISTA E O ROTULO NÃO , ATUALIZA O ROTULO E VISE-VERSA
// CASO TANTO O NOME E EMAIL SEJAM DIFERENTES , REALIZA O CADASTRO
const nomePerfil = "admin"; // ESCOLHA O NOME DO PERFIL
const rotulo = "leso1zzzzzggggzsd0" // ESCOLHA O NOME DO ROTULO


// MANIPULANDO TABELA USUARIOS

// CASO O NOME JA EXISTA E O ROTULO NÃO , ATUALIZA O ROTULO E VISE-VERSA
// CASO TANTO O NOME E EMAIL SEJAM DIFERENTES , REALIZA O CADASTRO
// AO REALIZAR O CADASTRO DO NOVO USUARIO AUTOMATICAMENTE E FEITO
// CADASTRO DA RELAÇÃO ENTRE USUARIO E PERFIL , CADASTRANDO O PERFIL DEFAULTE
const IDPerfilDafault = 19; // ESCOLHA O NUMERO DO PERFIL PADRÃO
// SO PODE CADASTRAR USUARIOS SE NA TABELA PERFIS EXISTIR UM PERFIL PADRÃO
const nomeUser = "pedros"; // NOME DO USUARIO
const email = "pedro_s@gmail.comm"; // EMAIL DO UDUARIO
const senha = "12345"; // SENHA USUARIO
const ativo = 1; // SE ESTA ATIVO OU NÃO USUARIO

// PARA ALTERAR UM USUARIO
// USE OS SEGUINTES CAMPOS ABAIXO , VOCÊ PODE ALTERAR QUALQUER UM , 
//MAS SE O NOME E IMAIL FOREM DIFERENTES DOS EXISTENTES NO BANCO DE DADOSIRÁ INCLUIR
// nomeUser
// email 
// senha 
// ativo 
// IdPerfil

// MANIPULAR TABELA USUARIO PERFIS
// SO PODE TROCAR O ID DO PERFIL , POR UM QUE JA EXISTA  NA TABELA PERFIS
const IdPerfil = 20; // USANDO PARA ALTERAÇÃO DO PERFIL DO USUARIO , 
//TANTO NA TABELA DE RELAÇÃO OU QUANDO É FEITO UMA ATUALIZAÇÃO
const IdUsuario = 36;
executar(acao, nomeUser, email, senha, ativo, IdPerfil, IdUsuario, nomePerfil, rotulo, IDPerfilDafault)
