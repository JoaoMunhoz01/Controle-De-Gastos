# Controle de Gastos

Neste projetos supomos que você já possua o postgres, node e git instalado.

As configurações estão no arquivo:

PROJETO-API-PGSQL/Api-Banco-Postgres/ProjetoJS/public/script/db/_database.js

Crie a tabela entrando na pasta raiz do projeto e rodando o comando:

$ node Api-Banco-Postgres/ProjetoJS/public/script/db/create.js

É possivel clonar o repositorio e startar os servidores, apenas rodando o arquivo .bat 

# API

Após clonar o projeto

$cd API-PgSQL/Api-Banco-Postgres

$npm install

$npm start

A API estara disponivel para requisições POST de login e register nas portas.

LOGIN

http://localhost:2001/login

Tipo:POST

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

Tipo:POST

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

Adicionar Gastos

http://localhost:2001/gastos

Já para gastos a API espera receber um body semelhante a este:

Tipo:POST

var raw = {

        "myData": {
        
                "Gasto": {
                
                    "Nome": 'Nome',
                    
                    "Valor": 'Valor',
                    
                    "Datavenc":'Datavenc',
                    
                    "User":'User'
                
                }
        
        }

}
        
Select Gastos

Para Select gastos a API espera receber um body semelhante a este:

Tipo:POST

raw = {

        "myData": {
        
            "Gasto": {
            
            "User": "You username"
            
            }
            
        }
        
    }
    
Para Exluir gastos a API espera receber um body semelhante a este:

Tipo:DELETE 

raw = {

          "myData": {
          
                "Gasto": {
                
                "id": "Id gasto"
                
                }
                
          }
          
    }
    
Para alterar senha a API espera receber um body semelhante a este:

Tipo:POST

raw = {

        "myData": {
        
                    "Person": {
                    
                    "User": document.getElementById("usernameUpdt").value,
                    
                    "Password": document.getElementById("passwordUpdt").value
                    
                    }
                    
                }

}
 
# FRONT

Para testes é possivel utilizar os arquivos presentes na pasta Front deste repositório

Na pasta Raiz do Projeto

$cd Front 

$npm install

$npm start

Abrir no navegador o caminho 

http://localhost:2002

