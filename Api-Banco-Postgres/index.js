const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get('/login', async (req, res) => {
    res.send("Está API está disponivel apenas para Requisições do tipo POST");
});

app.get('/register', async (req, res) => {
    res.send("Está API está disponivel apenas para Requisições do tipo POST");
});

app.get('/registerGasto', async (req, res) => {
    res.send("Está API está disponivel apenas para Requisições do tipo POST");
});

app.post('/login', async (req, res) => {
    let jsonReq = req.body;
    let resp = await login(jsonReq.myCredentials.Person.User, jsonReq.myCredentials.Person.Password);
    console.log(resp);
    res.json(resp);
});

app.post('/gastos', async (req, res) => {
    let jsonReq = req.body;
    let resp = await gasto(jsonReq.myData.Gasto.User);
    console.log(resp);
    res.json(resp);
});

app.post('/register', async (req, res) => {
    let jsonReq = req.body;
    let resp = await register(jsonReq.myData.Person.User, jsonReq.myData.Person.Password, jsonReq.myData.Person.fName, jsonReq.myData.Person.lName);
    console.log(resp);
    res.json(resp);
});
app.post('/registerGasto', async (req, res) => {
    let jsonReq = req.body;
    console.log(jsonReq)
    let resp = await registerGasto(jsonReq.myData.Gasto.Nome, jsonReq.myData.Gasto.Valor, jsonReq.myData.Gasto.Datavenc, jsonReq.myData.Gasto.User);
    console.log(resp);
    res.json(resp);
});

app.listen(2001, () => {
    console.log(`Server started on http://localhost:2001`);
})

//-----------------------------------------------------------------------------------------------------------
async function insertTables(user) {

    let db = require('./ProjetoJS/public/script/db/_database');
    await db.connect();


    try {
        const queryPerson = 'INSERT INTO person (userName, password, fName, lName) VALUES ($1, $2, $3, $4)';

        await db.query(queryPerson, [user.userName, user.password, user.fName, user.lName]);

        var json = {
            status: 1,
            responseMessage: 'Inserção completa'
        };
        return json;

    } catch (error) {



        var json = {
            status: 0,
            responseMessage: 'Inserção incompleta ' + error
        };

        return json;
    }

}

async function register(userName, password, fName, lName) {

    try {
        var user = {
            userName: userName,
            password: password,
            fName: fName,
            lName: lName
        };

        let data = await insertTables(user);

        return data;

    } catch (error) {
        return json = {
            status: 0,
            responseMessage: '' + error
        }
    }


}

//-----------------------------------------------------------------------------------------------------------
async function login(user, password) {
    var results;

    results = await selectTables(user, password);
    try {
        if (results.rowCount == 1) {
            var json = {
                status: 1,
                jsessionid: '1234',
                responseBody: results
            }
            return json;
        }
        else {
            var json = {
                status: 0,
                responseMessage: 'Houve um Erro: Usuario ou Senha invalido'
            }
            return json;
        }
    } catch (error) {
        return json = {
            status: 0,
            responseMessage: 'Houve um Erro: ' + error
        }
    }


}

async function selectTables(username, password) {
    let db = require('./ProjetoJS/public/script/db/_database');
    await db.connect();

    try {

        var results;

        results = await db.query(`SELECT * FROM person WHERE person.username='${username}' AND person.password='${password}'`);



        console.log('Seleção completa');

        return results;
    } catch (error) {
        return json = {
            status: 0,
            responseMessage: '' + error
        }
    }


}

async function insertTablesGasto(gasto) {

    let db = require('./ProjetoJS/public/script/db/_database');
    await db.connect();


    try {
        const queryPerson = 'INSERT INTO gastos (nome, valor, dtvenc, username) VALUES ($1, $2, $3, $4)';

        await db.query(queryPerson, [gasto.Nome, gasto.Valor, gasto.Datavenc, gasto.User]);

        var json = {
            status: 1,
            responseMessage: 'Inserção completa'
        };
        return json;

    } catch (error) {



        var json = {
            status: 0,
            responseMessage: 'Inserção incompleta ' + error
        };

        return json;
    }

}

async function registerGasto(Name, val, dtvenc, userName) {

    try {
        var gasto = {
            Nome: Name,
            Valor: val,
            Datavenc: dtvenc,
            User: userName
        };

        let data = await insertTablesGasto(gasto);

        return data;

    } catch (error) {
        return json = {
            status: 0,
            responseMessage: '' + error
        }
    }


}

async function gasto(user) {
    var results;
    results = await selectTablesGastos(user);
    console.log(results)
    try {
        if (results.rowCount > 0) {
            var json = {
                status: 1,
                responseBody: results
            }
            return json;
        }
        else {
            var json = {
                status: 0,
                responseMessage: 'Você não possui gastos registrados'
            }
            return json;
        }
    } catch (error) {
        return json = {
            status: 0,
            responseMessage: 'Houve um Erro: ' + error
        }
    }

}

async function selectTablesGastos(username) {
    let db = require('./ProjetoJS/public/script/db/_database');
    await db.connect();

    try {

        var results;

        results = await db.query(`SELECT * FROM gastos WHERE gastos.username='${username}' ORDER BY gastos.id ASC`);



        console.log('Seleção completa');

        return results;
    } catch (error) {
        return json = {
            status: 0,
            responseMessage: '' + error
        }
    }


}