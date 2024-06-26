const express = require("express");
require ("dotenv").config();
const connectToDatabase = require("./src/database/database"); //arquivos de conexao com o banco

const usuario  = require("./src/router/usuario.router"); //arquivo de rota do usuario
const auth  = require("./src/router/auth.router"); //arquivo de rota do auth
const produto  = require("./src/router/Produto.router"); //arquivo de rota do auth

const app = express();

const port = 3000;

app.use(express.json());

connectToDatabase(); //conectando com o banco

app.use("/usuario", usuario); //chamando as rotas de usuario
app.use("/auth", auth); //chamando as rotas de auth
app.use("/produto", produto); //chamando as rotas de produto


app.get("/", (req,res) => {
    res.send({
        menssage: "Bem vindo ao nosso market-place"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});