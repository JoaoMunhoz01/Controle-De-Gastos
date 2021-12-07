# PROJETO-API-PGSQL

Neste projetos supomos que você já possua o postgres instalado e configurado,
não se esqueça de alterar as configurações de conexão com o banco, as configurações estão no arquivo:

PROJETO-API-PGSQL/Api-Banco-Postgres/ProjetoJS/public/script/db/_database.js

Crie a tabela entrando na pasta raiz do projeto e rodando o comando:

$ node Api-Banco-Postgres/ProjetoJS/public/script/db/create.js

# API

Após clonar o projeto

$cd API-PgSQL/Api-Banco-Postgres

$npm install

$npm start

A API estara disponivel para requisições POST de login e register nas portas.

LOGIN

http://localhost:2001/login

Para login a API espera receber um body semelhante a este:

raw = {

        "myCredentials": {
        
            "Person": {
            
                "User": 'yourUserName',
                
                "Password": 'yourPassword'
                
            }
            
        }
        
    };

REGISTER

http://localhost:2001/register

Já para register a API espera receber um body semelhante a este:

raw = {

        "myCredentials": {
        
            "Person": {
            
                "User": 'yourUserName',
                
                "Password": 'yourPassword',
                
                "fName": 'yourFirstName',
                
                "lName": 'yourLastName'
                
            }
            
        }
        
    };
 
# FRONT

Para testes é possivel utilizar os arquivos presentes na pasta Front deste repositório

Na pasta Raiz do Projeto

$cd Front 

$npm install

$npm start

Abrir no navegador o caminho 

http://localhost:2002

