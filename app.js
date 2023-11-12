// Incluir bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express")
// importar a biblioteca para permitir conexão externa
const cors = require('cors')
// Chamar a função express
const app = express()

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json())

// Criar o middleware para permitir requisição externa
app.use((req, res, next) => {
    //qualquer endereço pode fazer requisição
    res.header("Access-Control-Allow-Origin", "*")
    //tipos de método que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    //permitir o envio de dados para API
    res.header("Access-Control-Allow-Headers", "Content-Type")
    // executar o cors
    app.use(cors())
    //quando não houver erro deve continuar o processamento
    next()
})


// Incluir as controllers
const messages = require("./controllers/climatedata")

// Criar as rotas
app.use('/climate', messages)

// Iniciar o servidor na porta 8080, criar função utilizando 
// o modelo Arrow function para retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
})


