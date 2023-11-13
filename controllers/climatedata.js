// Incluir bibliotecas
// Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
const express = require("express")
// Incluir a conexão com banco de dados
const db = require("../db/models")
// Chamar a função express
const router = express.Router()

// Rota para cadastrar dados climáticos
// router.post("/", async (req, res) => {
//     try {
//         const data = req.body

//         // Salvar no banco de dados
//         const createdData = await db.ClimateData.create(data)

//         return res.json({
//             error: false,
//             message: "Cadastro realizado com sucesso!",
//             data: createdData
//         })
//     } catch (error) {
//         console.error(error)
//         return res.status(500).json({
//             error: true,
//             message: "Erro: cadastro não realizado"
//         })
//     }
// })

// Rota para cadastrar dados climáticos
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        data.city_name = data.city_name.toUpperCase()
        // Verificar se já existe um registro para a cidade e dia informados
        const existingData = await db.ClimateData.findOne({
            where: {
                city_name: data.city_name,
                today: data.today
            }
        })

        if (existingData) {
            // Se já existir um registro, retornar um erro
            return res.json({
                message: "Já existe um registro no BD para a cidade e dia informados."
            })
        }

        // Se não existir, salvar no banco de dados
        const createdData = await db.ClimateData.create(data);

        return res.json({
            message: "Cadastro realizado com sucesso!",
            data: createdData
        })
    } catch (error) {
        console.error(error)
        return res.json({
            message: "Erro: cadastro não realizado"
        })
    }
})

 // Rota para obter todos os dados climáticos
//  router.get("/", async (req, res) => {
//      try {
//          // Consultar todos os dados climáticos no banco de dados
//          const climateData = await db.ClimateData.findAll()

//          // Verificar se há dados retornados
//          if (climateData.length > 0) {
//              return res.json({
//                  error: false,
//                  message: "Dados climáticos recuperados com sucesso!",
//                  data: climateData
//              })
//          } else {
//              return res.json({
//                  error: false,
//                  message: "Não há dados climáticos disponíveis."
//              })
//          }
//      } catch (error) {
//          console.error(error)
//          return res.status(500).json({
//              error: true,
//              message: "Erro ao recuperar dados climáticos."
//          })
//      }
//  })

 // Rota para obter todos os dados climáticos em ordem descrecente

 router.get("/", async (req, res) => {
    try {
        // Consultar todos os dados climáticos no banco de dados
        const climateData = await db.ClimateData.findAll({
            order: [['createdAt', 'DESC']]
        })

        // Verificar se há dados retornados
        if (climateData.length > 0) {
            return res.json({
                error: false,
                message: "Dados climáticos recuperados com sucesso!",
                data: climateData
            })
        } else {
            return res.json({
                error: false,
                message: "Não há dados climáticos disponíveis."
            })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: true,
            message: "Erro ao recuperar dados climáticos."
        })
    }
})

// Rota para obter dados climáticos por dia e cidade
// router.get("/", async (req, res) => {
//     try {
//         // Obter parâmetros da consulta
//         const { today, city_name } = req.query

//         // Validar se os parâmetros foram fornecidos
//         if (!today || !city_name) {
//             return res.json({
//                 message: "Os parâmetros 'dia' e 'cidade' são obrigatórios."
//             })
//         }

//         // Consultar dados climáticos no banco de dados com base nos parâmetros fornecidos
//         const climateData = await db.ClimateData.findAll({
//             where: {
//                 today: today,
//                 city_name: city_name
//             }
//         })

//         // Verificar se há dados retornados
//         if (climateData.length > 0) {
//             return res.json({
//                 message: "Dados climáticos recuperados do BD com sucesso!",
//                 data: climateData
//             })
//         } else {
//             return res.json({
//                 message: "Não há dados climáticos no BD disponíveis para o dia e cidade especificados."
//             })
//         }
//     } catch (error) {
//         console.error(error)
//         return res.json({
//             message: "Erro ao recuperar dados climáticos."
//         })
//     }
// })

// Exportar a instrução que está dentro da constante router
module.exports = router