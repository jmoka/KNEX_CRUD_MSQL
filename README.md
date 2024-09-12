# Aula sobre knex

## implantação do knex

### Instalação Global

    npm install -g knex

### Instalção Local

    npm install knex

## Instale a biblioteca dotenv

    npm install dotenv

## Mysql

    npm install mysql

## Instalar as Dependências

    npm install

### Instalar o mysql (uso o xammp)

     https://www.apachefriends.org/download.html

### Instalar o MariaDB

     https://mariadb.org/download/

### Criar uma Base de Dados

// Ou qualeur outro nome, desde que coloque o mesmo nome em .env ( DB_NAME=knexdb)
// No arquivo knexfile
// E nas Variavais de Ambiente do Windows

      "knexdb"

## VARIÁVEIS DE AMBIENTE

// DIGITE NO WINDOWS
"VARIAVEIS DE AMBIENTE"

        APERTE "VARIAVEIS DEAMBIENTE"
        "VARIAVEIS DO SISTEMA"
        "NOVO"

// CRIE AS SEGUNTES VARIAVEIS E SALVE

    DB_HOST=127.0.0.1
    DB_USER=root
    DB_PASS=
    DB_NAME=knexdb
    SENHA_MASTER =master

## Migration

### Temos três migrations de criação das tabelas

// perfis
// usuarios
// usuario-perfis
// npx caso estaja instalado localmente
// knex , se estiver instalado grobalmnete

    knex migrate:latest

    npx knex migrate:latest

## Seend

## Tabela Perfis

### Iremos povoar a tabela perfis com 3 perfis

// commun
// admin
// master

## Tabela Usuarios

### Iremos povoar a tabela usuarios com o usuario master

// usuario master

## Tabela Usuario-Perfis

### Iremos povoar com a peimira relação usuario master com perfil master

// usuario master 1 / perfil master 1

## CRUD

# ARQUIVO SYSTEM.JS

# ESCOLHA UMA AÇÃO

// 1-salvarUsuario / 2-salver perfil / 3-Atualizar Perfil Usuario

    const acao = 1;

# MANIPULAR TABELA PERFIS

## CASO O NOME JA EXISTA E O ROTULO NÃO , ATUALIZA O ROTULO E VISE-VERSA

## CASO TANTO O NOME E EMAIL SEJAM DIFERENTES , REALIZA O CADASTRO

// ESCOLHA O NOME DO PERFIL
// ESCOLHA O NOME DO ROTULO

    const nomePerfil = "admin";
    const rotulo = "ADMINISTRADOR"

# MANIPULANDO TABELA USUARIOS

## CASO O NOME JA EXISTA E O ROTULO NÃO , ATUALIZA O ROTULO E VISE-VERSA

## CASO TANTO O NOME E EMAIL SEJAM DIFERENTES , REALIZA O CADASTRO

## AO REALIZAR O CADASTRO DO NOVO USUARIO AUTOMATICAMENTE E FEITO

## O CADASTRO DA RELAÇÃO ENTRE USUARIO E PERFIL , CADASTRANDO O PERFIL DEFAULTE

// ESCOLHA O NUMERO DO PERFIL PADRÃO

    const IDPerfilDafault = 19;

# SO PODE CADASTRAR USUARIOS SE NA TABELA PERFIS EXISTIR UM PERFIL PADRÃO

// NOME DO USUARIO
// EMAIL DO UDUARIO
// SENHA USUARIO
// SE ESTA ATIVO OU NÃO USUARIO

    const nomeUser = "pedros";
    const email = "pedro_s@gmail.comm";
    const senha = "12345";
    const ativo = 1;

# PARA ALTERAR UM USUARIO

# USE OS SEGUINTES CAMPOS ABAIXO , VOCÊ PODE ALTERAR QUALQUER UM ,

# MAS SE O NOME E IMAIL FOREM DIFERENTES DOS EXISTENTES NO BANCO DE DADOS IRÁ INCLUIR

    // nomeUser
    // email
    // senha
    // ativo
    // IdPerfil

# MANIPULAR TABELA USUARIO PERFIS

## SO PODE TROCAR O ID DO PERFIL , POR UM QUE JA EXISTA NA TABELA PERFIS

// USANDO PARA ALTERAÇÃO DO PERFIL DO USUARIO
// TANTO NA TABELA DE RELAÇÃO OU QUANDO É FEITO UMA ATUALIZAÇÃO

    const IdPerfil = 20;

## INFORMOE O ID DO USUARIO, PARA ALTERAR O PERFIL NA TABELA RELAÇÃO DE PERFIS ( TROCANDO O PERFIL DO USUARIO)

    const IdUsuario = 36;
