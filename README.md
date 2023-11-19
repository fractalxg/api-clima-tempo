COMO RODAR O PROJETO LOCAL

Abra o terminal e entre no diretório/pasta onde os arquivos serão salvos
### cd diretório/pasta

Baixe os arquivos do git no diretorio/pasta
### git clone https://github.com/fractalxg/api-clima-tempo.git

Acesse a pasta que foi baixada
### cd api-clima-tempo

Acesse a pasta pelo vscode
### code .

Instalar todas as dependências indicadas pelo package.json
### npm install

Criar um arquivo .env na pasta do projeto e inserir as credenciais no arquivo 

-- Exemplo .env vazio:

TZ = 'America/Sao Paulo' # Fuso horário utilizado no projeto

NODE_ENV=
DB_USER=
DB_PWD=
DB_NAME=
DB_HOST=
DB_PORT=
DB_DIALECT=

Criar uma base de dados
### CREATE DATABASE weather CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Executar as Migrations
### npx sequelize-cli db:migrate

Rodar o projeto usando o nodemon
### nodemon .\app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

--------------------------------------------------------------------

SEQUENCIA PARA CRIAR O PROJETO
Criar arquivo package
### npm init

Gerenciar as requisições, rotas e URLs, entre outras funcionalidades
### npm install --save express

Rodar o projeto
### node .\app.js

Instalar o nodemon
-g significa globalmente
### npm install -g nodemon 

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte
### npm install --save-dev nodemon 

Rodar o projeto usando o nodemon
### nodemon .\app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

Comando SQL para criar a base de dados
### CREATE DATABASE weather CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Sequelize é uma biblioteca do Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o Postgres
### npm install --save pg pg-hstore 

Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para banco de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variáveis de ambiente
### npm install dotenv --save

Criar a Model ClimateData
### npx sequelize-cli model:generate --name ClimateData --attributes today:string,weatherDay:string,main_icon:string,main_temp:string,city_name:string,humidity:string,wind_speed:string,five_icon_0:string,five_week_day_0:string,five_max_temp_0:string,five_min_temp_0:string,five_icon_1:string,five_week_day_1:string,five_max_temp_1:string,five_min_temp_1:string,five_icon_2:string,five_week_day_2:string,five_max_temp_2:string,five_min_temp_2:string,five_icon_3:string,five_week_day_3:string,five_max_temp_3:string,five_min_temp_3:string,five_icon_4:string,five_week_day_4:string,five_max_temp_4:string,five_min_temp_4:string 

Executar as Migrations
### npx sequelize-cli db:migrate

Instalar o CORS para permitir requisições externas
### npm install cors


