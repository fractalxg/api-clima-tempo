//Normatizar o código
'use strict';

// permite trabalhar com o sistema  de arquivos do computador
const fs = require('fs');
// fornece utilitarios para trabalhar com caminhos de arquivos e diretórios 
const path = require('path');
// Sequelize é um ORM para Node.js que tem suporte para vários banco de dados
// ORM mapeamento objeto-relacional, as tabelas do banco de dados são representadas em classes e os registros das tabelas seriam instâncias dessas classes
const Sequelize = require('sequelize');
// Permite obter informações do processo na página atual
const process = require('process');
// permite obter parte do caminho para o arquivo
const basename = path.basename(__filename);
// verificar se deve utilizar a variável global ou 'development'
const env = process.env.NODE_ENV || 'development';
// incluir o arquivo
const config = require(__dirname + '/../config/config.js')[env];
// criar a constante com objeto vazio
const db = {};

// criar a variável que recebe a conexão com o bando de dados
let sequelize;
// verificar qual configuração de banco de dados deseja utilizar
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // usar as configurações do arquivo "config/database.js"
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Verificar conexão com banco de dados
try {
  console.log("Conexão com banco de dados realizada com sucesso!")
} catch (error) {
  console.log("Conexão com banco de dados não foi realizada: ", error)
}

// identificar o MODEL
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// atribuir a conexão com banco de dados para o objeto db 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// exportar a instrução que está dentro da constante db
module.exports = db;
